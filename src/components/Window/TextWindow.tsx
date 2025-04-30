// src/components/Window/TextWindow.tsx
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { textData } from "../../data/textData";

interface TextWindowProps {
  currentId: number;
  textIndex: number;
  handleClick: () => void;
  typingSpeed: number;
  setIsTyping: React.Dispatch<React.SetStateAction<boolean>>;
  playSound: (src: string) => void;
}

const Container = styled.div`
  background: ${({ theme }) => theme.textBg};
  color: ${({ theme }) => theme.textTxt};
  width: 100%;
  max-width: 768px;
  position: absolute;
  bottom: 0;
  height: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 4;
`;

const MotionContainer = styled(motion.div)`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`;

const TextWindow: React.FC<TextWindowProps> = ({
  currentId,
  textIndex,
  handleClick,
  typingSpeed,
  setIsTyping,
  playSound,
}) => {
  const maxTextLength = 20;
  const currentText =
    textData.find((item) => item.id === currentId)?.text || "";
  const textChunks =
    currentText.match(new RegExp(`.{1,${maxTextLength}}`, "g")) || [];

  const [displayText, setDisplayText] = useState("");
  const fullText = textChunks[textIndex] || "데이터 없음";

  useEffect(() => {
    setDisplayText("");

    let i = 0;
    const startTimeout = setTimeout(() => {
      const interval = setInterval(() => {
        setDisplayText(fullText.slice(0, i + 1));

        // if (i % 2 === 0) {
        //   playSound("/sounds/typing.mp3");
        // }

        i++;
        if (i >= fullText.length) {
          clearInterval(interval);
          setIsTyping(false); // ✅ 타이핑 끝났을 때만 false로
        }
      }, typingSpeed);

      // clean-up
      return () => clearInterval(interval);
    }, 200); // ✨ 등장 후 약간 텍스트 지연
  }, [fullText, typingSpeed, setIsTyping, playSound]);

  // 🕒 애니메이션 속도 = 기본 0.2초 + typingSpeed에 비례
  const animationDuration = 0.2 + typingSpeed / 1000;

  return (
    <Container onClick={handleClick}>
      <AnimatePresence mode="wait">
        <MotionContainer
          key={`${currentId}-${textIndex}`}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 0 }}
          transition={{
            duration: animationDuration,
            ease: "easeOut",
            delay: 0.2,
          }}
        >
          <p className="font-24">{displayText}</p>
        </MotionContainer>
      </AnimatePresence>
    </Container>
  );
};

export default TextWindow;
