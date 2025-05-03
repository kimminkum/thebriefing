// src/components/Window/TextWindow.tsx
import React, { useRef, useEffect, useState } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { scenarioData } from "../../data/scenarioData";
import { MAX_TEXT_LENGTH } from "../../utils/constants";
import Button from "../Button";

interface Props {
  currentId: number;
  textIndex: number;
  handleClick: () => void;
  typingSpeed: number;
  setIsTyping: React.Dispatch<React.SetStateAction<boolean>>;
  playSound: (src: string) => void;
  isVisible: boolean;
  isTyping: boolean;
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>; // ✅ 왼쪽 버튼 토글용
  goToPrevious: () => void;
  canGoBack: boolean;
}

const Container = styled.div<{ isVisible: boolean }>`
  position: absolute;
  bottom: 0;
  width: 100%;
  min-height: 140px;
  background: #fdfdfd;
  color: #111;

  transform: ${({ isVisible }) => (isVisible ? "none" : "translateY(100%)")};
  transition: transform 0.4s ease;
  z-index: 4;
  display: flex;
  justify-content: left;
  text-align: left;
  letter-spacing: -0.02em;
`;

const MotionContainer = styled(motion.div)`
  width: 100%;
  padding: 1rem;
  border: 4px solid #161616;
`;

const NextHint = styled.div`
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  font-size: 0.8rem;
  color: #888;
  animation: blink 1.2s ease-in-out infinite;

  @keyframes blink {
    0%,
    100% {
      opacity: 1;
    }
    50% {
      opacity: 0.2;
    }
  }
`;

const StyledBackButton = styled(Button)`
  position: absolute;
  bottom: 1rem;
  left: 1rem;
  font-size: 0.8rem;
  padding: 4px 8px;
  width: auto;
  opacity: 0.6;
  &:hover {
    opacity: 1;
  }
`;

const ToggleButton = styled(Button)`
  position: absolute;
  bottom: 100%;
  left: -4px;
  width: 20%;
  min-height: 30px;
  font-size: 0.7rem;
  padding: 3px 6px;
  border-radius: 0 0 4px 4px;
  opacity: 0.8;
  z-index: 5;
  border-radius: 12px 12px 0 0;
  &:hover {
    opacity: 1;
  }
`;

const TextWindow: React.FC<Props> = ({
  currentId,
  textIndex,
  handleClick,
  typingSpeed,
  setIsTyping,
  playSound,
  isVisible,
  setIsVisible,
  isTyping,
  canGoBack,
  goToPrevious
}) => {
  const prevId = useRef(currentId);
  const [shouldAnimate, setShouldAnimate] = useState(true);
  const isLastId = currentId >= scenarioData.length;

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
    setIsTyping(false);
    let i = 0;

    const blinkDuration = 600; // 0.6초 후 타이핑 시작
    const typingStartTimeout = setTimeout(() => {
      setIsTyping(true); // 여기서부터 타이핑 시작
      const interval = setInterval(() => {
        setDisplayText(fullText.slice(0, i + 1));
        if (i % 2 === 0) playSound("/sounds/typing.mp3");
        i++;
        if (i >= fullText.length) {
          clearInterval(interval);
          setIsTyping(false);
        }
      }, typingSpeed);
    }, blinkDuration);

    return () => {
      clearTimeout(typingStartTimeout);
      setIsTyping(false); // ✅ 이탈 시 해제
    };
  }, [fullText, typingSpeed, isVisible, playSound, setIsTyping, currentId]);

  return (
    <AnimatePresence>
      <Container isVisible={isVisible} onClick={handleClick}>
        <MotionContainer
          key={`${currentId}-${textIndex}`}
          initial={{ opacity: 0, y: 0 }}
          animate={{
            opacity: [1, 0.5, 1]
          }}
          transition={{
            duration: 0.6, // 총 0.6초 (0.15s x 4)
            ease: "easeInOut",
            times: [0, 0.5, 1] // 깜빡 타이밍 제어
          }}
        >
          <ToggleButton
            variant="primary"
            onClick={(e) => {
              e.stopPropagation();
              setIsVisible((prev) => !prev);
            }}
          >
            {isVisible ? "▼" : "▲"}
          </ToggleButton>
          <p className="font-24">{displayText}</p>

          {canGoBack && (
            <StyledBackButton
              variant="outline"
              disabled={isTyping || textIndex > 0}
              onClick={(e) => {
                e.stopPropagation();
                if (isTyping || textIndex > 0) return;
                goToPrevious();
              }}
            >
              ← 이전
            </StyledBackButton>
          )}

          {!isTyping && isVisible && !isLastId && <NextHint>▶</NextHint>}
        </MotionContainer>
      </Container>
    </AnimatePresence>
  );
};

export default TextWindow;
