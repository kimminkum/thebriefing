// src/pages/MainWindow.tsx
import React, { useState } from "react";
import styled from "styled-components";

import CenterWindow from "../components/Window/CenterWindow";
import HelpWindow from "../components/Window/HelpWindow";
import TextWindow from "../components/Window/TextWindow";
import UiWindow from "../components/Window/UiWindow";
import { textData } from "../data/textData";
import TutorialModal from "../components/TutorialModal";

const Container = styled.div`
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  width: 100%;
  max-width: 750px;
  margin: 0 auto;
  height: calc(100vh - 48px);
  position: relative;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const MainWindow: React.FC = () => {
  const [isUiMode, setIsUiMode] = useState(true); // ✅ 직접 상태로 대체
  const toggleUi = () => setIsUiMode((prev) => !prev);

  const [currentId, setCurrentId] = useState(1);
  const [textIndex, setTextIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(30);
  const [showTutorial, setShowTutorial] = useState(true);
  const [isLast, setIsLast] = useState<boolean>(false);

  const closeTutorial = () => setShowTutorial(false);

  const playSound = (src: string) => {
    const audio = new Audio(src);
    audio.play();
  };

  const handleClick = () => {
    if (isTyping) return;

    const currentText =
      textData.find((item) => item.id === currentId)?.text || "";
    const textChunks = currentText.match(new RegExp(`.{1,10}`, "g")) || [];

    if (textIndex < textChunks.length - 1) {
      setTextIndex((prev) => prev + 1);
    } else {
      setIsTyping(true);
      setTextIndex(0);
      // playSound("/sounds/page-flip.mp3");

      setTimeout(() => {
        setCurrentId((prevId) =>
          prevId < textData.length ? prevId + 1 : prevId
        );
      }, 100);
    }
  };

  return (
    <Container>
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
      />
      <UiWindow toggleUi={toggleUi} isUiMode={isUiMode} />

      {isLast && <div>over</div>}
    </Container>
  );
};

export default MainWindow;
