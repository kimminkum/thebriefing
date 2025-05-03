import React, { useState, useCallback } from "react";
import styled from "styled-components";
import CenterWindow from "../components/Window/CenterWindow";
import HelpWindow from "../components/Window/HelpWindow";
import TextWindow from "../components/Window/TextWindow";
import UiWindow from "../components/Window/UiWindow";
import TutorialModal from "../components/TutorialModal";
import { MAX_TEXT_LENGTH } from "../utils/constants";

import { scenarioData } from "../data/scenarioData";

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
  const [currentId, setCurrentId] = useState(1);
  const [textIndex, setTextIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(30);
  const [showTutorial, setShowTutorial] = useState(true);
  const [isUiMode, setIsUiMode] = useState(false);
  const [isTextVisible, setIsTextVisible] = useState(true);

  const toggleUi = () => setIsUiMode((prev) => !prev);
  const closeTutorial = () => setShowTutorial(false);

  const playSound = useCallback((src: string) => {
    const audio = new Audio(src);
    // audio.play();
  }, []);

  const handleClick = () => {
    if (isTyping || !isTextVisible) return;

    const currentItem = scenarioData.find((item) => item.id === currentId);
    if (!currentItem) return;

    const text = currentItem.text || "";
    const textChunks =
      text.match(new RegExp(`.{1,${MAX_TEXT_LENGTH}}`, "g")) || [];

    // 아직 보여줄 텍스트가 남아있으면 textIndex 증가
    if (textIndex < textChunks.length - 1) {
      setTextIndex((prev) => prev + 1);
      return;
    }

    // 마지막 chunk까지 출력했고 다음 ID가 존재하면 진행
    if (currentId < scenarioData.length) {
      setTextIndex(0);

      // playSound("/sounds/page-flip.mp3"); // 나중에 추가 가능
      setTimeout(() => {
        setCurrentId((prev) => prev + 1);
      }, 300);
    }
    // else: 마지막 ID이므로 아무 동작 없음
  };

  return (
    <Container>
      <ProgressBarWrapper>
        <ProgressBarInner percent={(currentId / scenarioData.length) * 100} />
      </ProgressBarWrapper>

      {showTutorial && <TutorialModal onClose={closeTutorial} />}
      <CenterWindow
        currentId={currentId}
        textIndex={textIndex}
        handleClick={handleClick}
      />
      <HelpWindow
        toggleUi={toggleUi}
        isUiMode={isUiMode}
        typingSpeed={typingSpeed}
        setTypingSpeed={setTypingSpeed}
        reopenTutorial={() => setShowTutorial(true)}
      />
      <TextWindow
        currentId={currentId}
        handleClick={handleClick}
        textIndex={textIndex}
        typingSpeed={typingSpeed}
        setIsTyping={setIsTyping}
        playSound={playSound}
        isVisible={isTextVisible}
        setIsVisible={setIsTextVisible}
        isTyping={isTyping}
        goToPrevious={() => {
          if (currentId > 1) {
            setCurrentId((prev) => prev - 1);
            setTextIndex(0);
          }
        }}
        canGoBack={currentId > 1}
      />
      <UiWindow toggleUi={toggleUi} />
    </Container>
  );
};

export default Main;
