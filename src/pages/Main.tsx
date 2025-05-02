import React, { useState } from "react";
import styled from "styled-components";
import CenterWindow from "../components/Window/CenterWindow";
import HelpWindow from "../components/Window/HelpWindow";
import TextWindow from "../components/Window/TextWindow";
import UiWindow from "../components/Window/UiWindow";
import TutorialModal from "../components/TutorialModal";
import { textData } from "../data/textData";

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
  border-left: 4px solid #d4b28c;
  border-right: 4px solid #d4b28c;
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

  const playSound = (src: string) => {
    const audio = new Audio(src);
    // audio.play();
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
      setIsTextVisible(false);
      // playSound("/sounds/page-flip.mp3");
      setTextIndex(0);

      setTimeout(() => {
        setCurrentId((prev) => (prev < textData.length ? prev + 1 : prev));
        setTimeout(() => {
          setIsTextVisible(true);
        }, 200); // 텍스트 재등장
      }, 300); // CenterWindow 전환 타이밍
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
        isVisible={isTextVisible}
        setIsVisible={setIsTextVisible}
      />
      <UiWindow toggleUi={toggleUi} isUiMode={isUiMode} />
    </Container>
  );
};

export default Main;
