// src/components/Window/TextWindow.tsx
import React, { useRef, useEffect, useState } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { scenarioData } from "../../data/scenarioData";
import { MAX_TEXT_LENGTH } from "../../utils/constants";

interface Props {
  currentId: number;
  textIndex: number;
  handleClick: () => void;
  typingSpeed: number;
  setIsTyping: React.Dispatch<React.SetStateAction<boolean>>;
  playSound: (src: string) => void;
  isVisible: boolean;
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>; // ✅ 왼쪽 버튼 토글용
}

const Container = styled.div<{ isVisible: boolean }>`
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 1rem 1.5rem;
  min-height: 140px;
  background: #fdfdfd;
  color: #111;
  border: 4px solid #000;
  box-shadow: 4px 4px 0 #000;
  box-shadow: 4px 4px 0 #000;

  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  transition: opacity 0.4s ease;
  z-index: 4;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: left;
  letter-spacing: -0.02em;
`;

const MotionContainer = styled(motion.div)`
  width: 100%;
`;

const TextWindow: React.FC<Props> = ({
  currentId,
  textIndex,
  handleClick,
  typingSpeed,
  setIsTyping,
  playSound,
  isVisible,
  setIsVisible
}) => {
  const prevId = useRef(currentId);
  const [shouldAnimate, setShouldAnimate] = useState(true);

  // 애니메이션 조건 제어용 useEffect
  useEffect(() => {
    setShouldAnimate(prevId.current !== currentId);
    prevId.current = currentId;
  }, [currentId]);

  const currentText =
    scenarioData.find((item) => item.id === currentId)?.text || "";
  const textChunks =
    currentText.match(new RegExp(`.{1,${MAX_TEXT_LENGTH}}`, "g")) || [];
  const fullText = textChunks[textIndex] || "데이터 없음";

  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    if (!isVisible) return;

    setDisplayText("");
    setIsTyping(true);
    let i = 0;

    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        setDisplayText(fullText.slice(0, i + 1));
        if (i % 2 === 0) playSound("/sounds/typing.mp3");
        i++;
        if (i >= fullText.length) {
          clearInterval(interval);
          setIsTyping(false);
        }
      }, typingSpeed);
    }, 150);

    return () => {
      clearTimeout(timeout);
      setIsTyping(false); // ✅ 이탈 시 해제
    };
  }, [fullText, typingSpeed, isVisible, playSound, setIsTyping, currentId]);

  return (
    <AnimatePresence>
      <Container isVisible={isVisible} onClick={handleClick}>
        <MotionContainer
          key={`${currentId}-${textIndex}`}
          initial={shouldAnimate ? { opacity: 0, y: 10 } : false}
          animate={{ opacity: 1, y: 0 }}
          exit={shouldAnimate ? { opacity: 0, y: 0 } : {}}
          transition={{ duration: 0.3, ease: "easeOut", delay: 0.1 }}
        >
          <p>{displayText}</p>
        </MotionContainer>
      </Container>
    </AnimatePresence>
  );
};

export default TextWindow;
