// src/pages/MainWindow.tsx
import React, { useState } from "react";
import styled from "styled-components";

import CenterWindow from "../components/Window/CenterWindow";
import HelpWindow from "../components/Window/HelpWindow";
import TextWindow from "../components/Window/TextWindow";
import UiWindow from "../components/Window/UiWindow";
import { useTheme } from "../utils/ThemeContext";
import { textData } from "../data/textData"; // ✅ textData import 추가

const Container = styled.div`
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  width: 100%;
  max-width: 768px;
  margin: 0 auto;
  height: calc(100vh - 48px);
  position: relative;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const MainWindow: React.FC = () => {
  const { isUiMode, toggleUi } = useTheme(); // UI 모드 상태와 토글 함수 가져오기
  const [currentId, setCurrentId] = useState(1);
  const [isLast, setIsLast] = useState<boolean>(false);
  const maxTextLength = 10; // 한 번에 보여줄 최대 글자 수
  const [textIndex, setTextIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(30); // HelpWindow or UiWindow에서 조절

  const playSound = (src: string) => {
    const audio = new Audio(src);
    audio.play();
  };

  const handleClick = () => {
    if (isTyping) return; // 🧷 1. 타이핑 중엔 클릭 무시

    const currentText =
      textData.find((item) => item.id === currentId)?.text || "";
    const textChunks =
      currentText.match(new RegExp(`.{1,${maxTextLength}}`, "g")) || [];

    if (textIndex < textChunks.length - 1) {
      // ✍️ 2. 텍스트가 남아 있으면 계속 타이핑
      setTextIndex((prevIndex) => prevIndex + 1);
    } else {
      // 📄 3. 텍스트 끝 → 다음 ID, 서류 넘김 효과
      setIsTyping(true);
      setTextIndex(0);
      // playSound("/sounds/page-flip.mp3");

      // 타이핑 효과는 CenterWindow가 바뀐 후 일정 시간 후에 시작
      setTimeout(() => {
        setCurrentId((prevId) =>
          prevId < textData.length ? prevId + 1 : prevId
        );
      }, 100); // CenterWindow 먼저 바꾸고 → TextWindow가 다음 연출
    }
  };

  return (
    <Container>
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
      />
      <TextWindow
        currentId={currentId}
        handleClick={handleClick}
        textIndex={textIndex}
        typingSpeed={typingSpeed}
        setIsTyping={setIsTyping}
        playSound={playSound} // 🔥 추가
      />
      <UiWindow toggleUi={toggleUi} isUiMode={isUiMode} />

      {isLast && <div> over </div>}
    </Container>
  );
};

export default MainWindow;
