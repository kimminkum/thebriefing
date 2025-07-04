// TextWindow.tsx
import React, { useImperativeHandle, forwardRef, useRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { scenarioData } from '../../data/scenarioData';
import Button from '../Button';
import { Body, Highlight, Badge } from '../../styles/Typhography';

interface Props {
  currentId: number;
  textIndex: number;
  handleClick: () => void;
  typingSpeed: number;
  setIsTyping: React.Dispatch<React.SetStateAction<boolean>>;
  $isVisible: boolean;
  isTyping: boolean;
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
  goToPrevious: () => void;
  blinkDuration: number;
  canGoBack: boolean;
}

export interface TextWindowHandle {
  forceFinishTyping: () => void;
}

const Container = styled.div<{ $isVisible: boolean }>`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 160px;
  background: #fdfdfd;
  color: #111;
  transform: ${({ $isVisible }) => ($isVisible ? 'none' : 'translateY(100%)')};
  transition: transform 0.4s ease;
  z-index: 4;
  display: flex;
  justify-content: left;
  text-align: left;
  letter-spacing: -0.02em;
  font-weight: 500;
`;

const MotionContainer = styled(motion.div)`
  width: 100%;
  padding: calc(20 / 734 * 100%);
  border: 4px solid #161616;
`;

const NextHint = styled.div`
  position: absolute;
  bottom: 0;
  margin-bottom: calc(32 / 734 * 100%);
  right: calc(32 / 734 * 100%);
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
  bottom: 0;
  margin-bottom: calc(28 / 734 * 100%);
  left: calc(24 / 734 * 100%);
  padding: 4px 6px;
  width: auto;
  opacity: 0.6;
  &:hover {
    opacity: 1;
  }
`;

const ToggleButton = styled(Button)`
  position: absolute;
  bottom: 100%;
  left: -3px;
  width: 25%;
  min-height: calc((50 / 750 * 100) * 1px);
  padding: 4px 8px;
  opacity: 0.8;
  z-index: 5;
  border-radius: 12px 12px 0 0 !important;
  &:hover {
    opacity: 1;
  }
`;

const TextWindow = forwardRef<TextWindowHandle, Props>(
  (
    {
      currentId,
      textIndex,
      handleClick,
      typingSpeed,
      setIsTyping,
      $isVisible,
      isTyping,
      setIsVisible,
      canGoBack,
      goToPrevious,
      blinkDuration,
    },
    ref,
  ) => {
    const typingTimeout = useRef<NodeJS.Timeout | null>(null);
    const typingInterval = useRef<NodeJS.Timeout | null>(null);
    const [displayText, setDisplayText] = useState('');
    const [isWaiting, setIsWaiting] = useState(false);

    useEffect(() => {
      setDisplayText('');
      setIsTyping(true);
      setIsWaiting(true);

      const currentText = scenarioData.find((item) => item.id === currentId)?.text || '';
      const textChunks = currentText.split(/(?<=[.!?])\s+/).filter(Boolean);
      const fullText = textChunks[textIndex] || '데이터 없음';

      let i = 0;

      typingTimeout.current = setTimeout(() => {
        setIsWaiting(false);
        typingInterval.current = setInterval(() => {
          i++;
          setDisplayText(fullText.slice(0, i));
          if (i >= fullText.length) {
            clearInterval(typingInterval.current!);
            setIsTyping(false);
          }
        }, typingSpeed);
      }, blinkDuration);

      return () => {
        clearTimeout(typingTimeout.current!);
        clearInterval(typingInterval.current!);
        setIsTyping(false);
      };
    }, [currentId, textIndex, typingSpeed, setIsTyping, blinkDuration]);

    const handleFastForward = () => {
      const currentText = scenarioData.find((item) => item.id === currentId)?.text || '';
      const textChunks = currentText.split(/(?<=[.!?])\s+/).filter(Boolean);
      const fullText = textChunks[textIndex] || '데이터 없음';

      if (isWaiting) {
        clearTimeout(typingTimeout.current!);
        setIsWaiting(false);
      }

      clearInterval(typingInterval.current!);
      setDisplayText(fullText);
      setIsTyping(false);
    };

    useImperativeHandle(ref, () => ({
      forceFinishTyping: handleFastForward,
    }));

    TextWindow.displayName = 'TextWindow';

    return (
      <AnimatePresence>
        <Container
          $isVisible={$isVisible}
          onClick={() => {
            if (isTyping) {
              handleFastForward();
            } else {
              handleClick();
            }
          }}
        >
          <MotionContainer
            key={`${currentId}-${textIndex}`}
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: [1, 0.5, 1] }}
            transition={{
              duration: 0.6,
              ease: 'easeInOut',
              times: [0, 0.5, 1],
            }}
          >
            <ToggleButton
              className="font-16"
              $variant="primary"
              onClick={(e) => {
                e.stopPropagation();
                setIsVisible((prev) => !prev);
              }}
            >
              {$isVisible ? '▼' : '▲'}
            </ToggleButton>
            <Body>
              {(() => {
                const currentItem = scenarioData.find((item) => item.id === currentId);
                const highlights = currentItem?.highlights || [];
                const badges = currentItem?.badges || [];

                let text = displayText;

                // badge 먼저 치환 (겹침 방지)
                badges.forEach((badge) => {
                  const safeBadge = badge.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
                  const regex = new RegExp(`(${safeBadge})`, 'g');
                  text = text.replace(regex, '[[BADGE:$1]]');
                });

                // highlight 치환
                highlights.forEach((highlight) => {
                  const safeHighlight = highlight.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
                  const regex = new RegExp(`(${safeHighlight})`, 'g');
                  text = text.replace(regex, '[[HIGHLIGHT:$1]]');
                });

                // 마커 분해
                const tokens = text.split(/(\[\[(?:HIGHLIGHT|BADGE):.*?\]\])/g);

                return tokens.map((token, i) => {
                  if (token.startsWith('[[HIGHLIGHT:')) {
                    const word = token.replace('[[HIGHLIGHT:', '').replace(']]', '');
                    return <Highlight key={i}>{word}</Highlight>;
                  } else if (token.startsWith('[[BADGE:')) {
                    const word = token.replace('[[BADGE:', '').replace(']]', '');
                    return <Badge key={i}>{word}</Badge>;
                  } else {
                    return <span key={i}>{token}</span>;
                  }
                });
              })()}
            </Body>

            {canGoBack && (
              <StyledBackButton
                className="font-16"
                $variant="outline"
                disabled={isTyping}
                onClick={(e) => {
                  e.stopPropagation();
                  goToPrevious();
                }}
              >
                ← 이전
              </StyledBackButton>
            )}

            {!isTyping && $isVisible && currentId < scenarioData.length && (
              <NextHint className="font-16">▶</NextHint>
            )}
          </MotionContainer>
        </Container>
      </AnimatePresence>
    );
  },
);

export default TextWindow;
