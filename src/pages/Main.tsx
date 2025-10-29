// src/pages/Main.tsx
import React, { useRef, useState, useCallback } from 'react';
import styled from 'styled-components';
import { useRecoilState, useRecoilValue } from 'recoil';
import {
  currentScenarioIdState,
  textChunkIndexState,
  scenarioProgressState,
} from '../atoms/scenarioAtom';
import { useUIStore } from '../stores/uiStore';
import CustomHead from '../components/Head';

// 동적 임포트로 컴포넌트 지연 로딩
import dynamic from 'next/dynamic';

const CenterWindow = dynamic(() => import('../components/Window/CenterWindow'), {
  loading: () => <div style={{ height: 'calc(100vh - 202px)', background: '#fffaf3' }} />,
});

const HelpWindow = dynamic(() => import('../components/Window/HelpWindow'), {
  loading: () => <div />,
});

const TextWindow = dynamic(() => import('../components/Window/TextWindow'), {
  loading: () => <div />,
});

const UiWindow = dynamic(() => import('../components/Window/UiWindow'), {
  loading: () => <div />,
});

const TutorialModal = dynamic(() => import('../components/TutorialModal'), {
  loading: () => <div />,
});

import { scenarioData } from '../data/scenarioData';
import type { TextWindowHandle } from '../types/window';

const AppWrapper = styled.div`
  width: 100%;
  height: 100dvh;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  background-color: #faf9f5;
`;

const Container = styled.div`
  width: 100%;
  min-width: 375px;
  max-width: 750px;
  height: 100vh;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
  padding: clamp(12px, calc(100vw / 750 * 16), 24px) 0;
  background-color: #fdf7e3;
  color: #111;
  border: 2px solid #d4b28c;
  box-shadow: 0 4px 16px rgba(180, 150, 100, 0.3);
`;

const ProgressBarWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 6px;
  background: #f0e7d4;
  z-index: 10;
`;

const ProgressBarInner = styled.div<{ $percent: number }>`
  width: ${({ $percent }) => $percent}%;
  height: 100%;
  background: linear-gradient(to right, #d4b28c, #7ca4bd);
  border-radius: 3px;
  transition: width 0.3s ease;
`;

const Main: React.FC = () => {
  const [currentId, setCurrentId] = useRecoilState(currentScenarioIdState);
  const [textIndex, setTextIndex] = useRecoilState(textChunkIndexState);
  const progress = useRecoilValue(scenarioProgressState);
  const [isTyping, setIsTyping] = useState(false);
  const textWindowRef = useRef<TextWindowHandle>(null);

  const typingSpeed = useUIStore((s) => s.typingSpeed);
  const setTypingSpeed = useUIStore((s) => s.setTypingSpeed);
  const showTutorial = useUIStore((s) => s.showTutorial);
  const toggleTutorial = useUIStore((s) => s.toggleTutorial);
  const isUiMode = useUIStore((s) => s.isUiMode);
  const toggleUiMode = useUIStore((s) => s.toggleUiMode);
  const isTextVisible = useUIStore((s) => s.textWindowVisible);
  const toggleTextWindowVisible = useUIStore((s) => s.toggleTextWindowVisible);
  const isClickLocked = useUIStore((s) => s.isClickLocked);
  const lockClickTemporarily = useUIStore((s) => s.lockClickTemporarily);

  const BLINK_DURATION = 611;

  const playSound = useCallback(() => {
    const audio = new Audio('/sound/papersound.mp3');
    audio.currentTime = 0;
    audio.play().catch(() => {});
  }, []);

  const handleClick = () => {
    if (showTutorial || !isTextVisible || isClickLocked || isUiMode) return;

    if (isTyping) {
      textWindowRef.current?.forceFinishTyping?.();
      return;
    }

    const currentItem = scenarioData.find((item) => item.id === currentId);
    if (!currentItem) return;

    const chunks = currentItem.text.split(/(?<=[.!?])\s+/).filter(Boolean);

    if (textIndex < chunks.length - 1) {
      setTextIndex((i) => i + 1);
      lockClickTemporarily();
      return;
    }

    const idx = scenarioData.findIndex((i) => i.id === currentId);
    if (idx < scenarioData.length - 1) {
      setTextIndex(0);
      playSound();
      lockClickTemporarily();
      setCurrentId(scenarioData[idx + 1].id);
    }
  };

  const goToPrevious = () => {
    const idx = scenarioData.findIndex((i) => i.id === currentId);
    if (idx === -1) return;

    if (textIndex > 0) {
      setTextIndex((i) => i - 1);
    } else if (idx > 0) {
      const prev = scenarioData[idx - 1];
      const prevChunks = prev.text.split(/(?<=[.!?])\s+/).filter(Boolean);
      setCurrentId(prev.id);
      setTextIndex(prevChunks.length - 1);
    }
  };

  return (
    <>
      <CustomHead />
      <AppWrapper onClick={handleClick}>
        <Container onClick={(e) => e.stopPropagation()}>
          <ProgressBarWrapper>
            <ProgressBarInner $percent={progress} />
          </ProgressBarWrapper>

          {showTutorial && <TutorialModal onClose={toggleTutorial} />}
          <CenterWindow currentId={currentId} handleClick={handleClick} />
          <HelpWindow
            toggleUi={toggleUiMode}
            $isUiMode={isUiMode}
            typingSpeed={typingSpeed}
            setTypingSpeed={setTypingSpeed}
            reopenTutorial={toggleTutorial}
          />
          <TextWindow
            ref={textWindowRef}
            currentId={currentId}
            textIndex={textIndex}
            handleClick={handleClick}
            typingSpeed={typingSpeed}
            setIsTyping={setIsTyping}
            $isVisible={isTextVisible}
            setIsVisible={toggleTextWindowVisible}
            isTyping={isTyping}
            goToPrevious={goToPrevious}
            blinkDuration={BLINK_DURATION}
            canGoBack={textIndex > 0 || scenarioData.findIndex((item) => item.id === currentId) > 0}
          />
          <UiWindow toggleUi={toggleUiMode} />
        </Container>
      </AppWrapper>
    </>
  );
};

export default Main;
