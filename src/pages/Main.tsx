import React, { useRef, useState, useCallback } from "react";
import styled from "styled-components";
import CenterWindow from "../components/Window/CenterWindow";
import HelpWindow from "../components/Window/HelpWindow";
import TextWindow from "../components/Window/TextWindow";
import UiWindow from "../components/Window/UiWindow";
import TutorialModal from "../components/TutorialModal";
import Papersound from "../assets/sound/papersound.mp3";

import { scenarioData } from "../data/scenarioData";

const AppWrapper = styled.div`
  width: 100%;
  height: 100dvh;
`;

const Container = styled.div`
  background: #fdf7e3;
  color: #111;
  width: 100%;
  max-width: 750px;
  min-width: 375px;
  height: 100dvh;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
  border: 4px solid #d4b28c;
  border-top: none;
`;

const ProgressBarWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background: #d4b28c;
  z-index: 10;
`;

const ProgressBarInner = styled.div<{ percent: number }>`
  width: ${({ percent }) => percent}%;
  height: 100%;
  background-color: #bd8cd4;
  transition: width 0.3s ease;
`;

const Main: React.FC = () => {
  const [currentId, setCurrentId] = useState<number>(1);
  const [textIndex, setTextIndex] = useState(0);
  const [isTyping, setIsTyping] = useState<boolean>(false);
  const [typingSpeed, setTypingSpeed] = useState<number>(10);
  const [showTutorial, setShowTutorial] = useState<boolean>(true);
  const [isUiMode, setIsUiMode] = useState<boolean>(false);
  const [isTextVisible, setIsTextVisible] = useState<boolean>(true);
  const [isClickLocked, setIsClickLocked] = useState<boolean>(false);
  const BLINK_DURATION = 611; // 0.6초 동안의 애니메이션 지연 시간
  const textWindowRef = useRef<any>(null); // 👈 ref 선언

  const toggleUi = () => setIsUiMode((prev) => !prev);
  const closeTutorial = () => setShowTutorial(false);

  const playSound = useCallback(() => {
    const audio = new Audio(Papersound);
    audio.currentTime = 0;
    audio.play().catch((e) => {
      // 자동 재생이 차단된 경우 에러 무시
      console.warn("음성 재생 차단됨:", e.message);
    });
  }, []);

  const handleClick = () => {
    if (!isTextVisible || isClickLocked) return;

    if (isTyping) {
      // 👇 타이핑 중이라면 강제 완료
      textWindowRef.current?.forceFinishTyping?.();
      return;
    }

    const currentItem = scenarioData.find((item) => item.id === currentId);
    if (!currentItem) return;

    const text = currentItem.text || "";
    const textChunks = text.split(/(?<=[.!?])\s+/).filter(Boolean); // ✅ 수정됨

    // 아직 보여줄 텍스트가 남아있으면 textIndex 증가
    if (textIndex < textChunks.length - 1) {
      setTextIndex((prev) => prev + 1);
      lockClickTemporarily();
      return;
    }

    // 다음 ID가 존재하면 진행 (중복 증가 방지)
    const currentIndex = scenarioData.findIndex(
      (item) => item.id === currentId
    );
    if (currentIndex < scenarioData.length - 1) {
      const nextId = scenarioData[currentIndex + 1].id;
      setTextIndex(0);
      playSound(); // ✅ 사운드 그대로 유지
      lockClickTemporarily();

      setTimeout(() => {
        setCurrentId(nextId);
      }, 300);
    }
  };

  const lockClickTemporarily = () => {
    setIsClickLocked(true);
    setTimeout(() => setIsClickLocked(false), 611);
  };

  const goToPrevious = () => {
    const currentIndex = scenarioData.findIndex(
      (item) => item.id === currentId
    );
    if (currentIndex === -1) return;

    const currentItem = scenarioData[currentIndex];
    const chunks = currentItem.text.split(/(?<=[.!?])\s+/).filter(Boolean); // ✅ 수정됨

    if (textIndex > 0) {
      setTextIndex((prev) => prev - 1);
    } else if (currentIndex > 0) {
      const prevItem = scenarioData[currentIndex - 1];
      const prevTextChunks = prevItem.text
        .split(/(?<=[.!?])\s+/)
        .filter(Boolean); // ✅ 수정됨
      setCurrentId(prevItem.id);
      setTextIndex(prevTextChunks.length - 1);
    }
  };

  return (
    <AppWrapper onClick={handleClick}>
      <Container onClick={(e) => e.stopPropagation()}>
        <ProgressBarWrapper>
          <ProgressBarInner percent={(currentId / scenarioData.length) * 100} />
        </ProgressBarWrapper>

        {showTutorial && <TutorialModal onClose={closeTutorial} />}
        <CenterWindow
          currentId={currentId}
          textIndex={textIndex}
          handleClick={handleClick}
          resetToStart={() => {
            setCurrentId(1);
            setTextIndex(0);
            setShowTutorial(true); // 튜토리얼 다시 보이게 하려면 포함
          }}
        />
        <HelpWindow
          toggleUi={toggleUi}
          isUiMode={isUiMode}
          typingSpeed={typingSpeed}
          setTypingSpeed={setTypingSpeed}
          reopenTutorial={() => setShowTutorial(true)}
        />
        <TextWindow
          ref={textWindowRef} // 👈 ref 연결
          currentId={currentId}
          handleClick={handleClick}
          textIndex={textIndex}
          typingSpeed={typingSpeed}
          setIsTyping={setIsTyping}
          isVisible={isTextVisible}
          setIsVisible={setIsTextVisible}
          isTyping={isTyping}
          goToPrevious={goToPrevious}
          blinkDuration={BLINK_DURATION}
          canGoBack={
            textIndex > 0 ||
            scenarioData.findIndex((item) => item.id === currentId) > 0
          }
        />
        <UiWindow toggleUi={toggleUi} />
      </Container>
    </AppWrapper>
  );
};

export default Main;
