// src/components/Window/CenterWindow.tsx
import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import { scenarioData } from '../../data/scenarioData';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useUIStore } from '../../stores/uiStore';

interface Props {
  currentId: number;
  handleClick: () => void;
}

const Container = styled.div<{ $isTextVisible: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  transition: 0.3s height;
  height: ${({ $isTextVisible }) =>
    $isTextVisible ? 'calc(100vh - 202px)' : 'calc(100vh - 72px)'};

  padding: clamp(12px, 4vw, 32px);
  border-radius: 16px;
  margin: clamp(12px, 4vw, 32px) 0;
  box-shadow: 0 2px 8px rgba(180, 150, 100, 0.12);
  box-sizing: border-box;
  overflow: hidden;
`;

const ImageBox = styled(motion.div)`
  position: relative;
  width: 100%;
  aspect-ratio: 3 / 4;
  border-radius: 12px;
  overflow: hidden;
  background-color: #fffaf3;

  img {
    width: 100%;
    height: auto;
    max-height: 100%;
    object-fit: contain;
    display: block;
  }
`;

const MotionBox = styled(motion.div)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const CenterWindow: React.FC<Props> = ({ currentId, handleClick }) => {
  const prevId = useRef(currentId);
  const [shouldAnimate, setShouldAnimate] = useState(true);
  const isTextVisible = useUIStore((s) => s.textWindowVisible);

  useEffect(() => {
    setShouldAnimate(prevId.current !== currentId);
    prevId.current = currentId;
  }, [currentId]);

  const currentScenario = scenarioData.find((item) => item.id === currentId);
  const content = currentScenario?.content;
  const isImage = content?.type === 'image';

  if (!currentScenario) {
    return <Container $isTextVisible={isTextVisible}>콘텐츠 없음</Container>;
  }

  return (
    <Container onClick={handleClick} $isTextVisible={isTextVisible}>
      <AnimatePresence mode="wait">
        {isImage && content?.src && (
          <ImageBox
            key={`${currentId}-image`}
            initial={shouldAnimate ? { opacity: 0 } : false}
            animate={{ opacity: 1 }}
            exit={shouldAnimate ? { opacity: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <Image
              src={content.src}
              alt={content.alt || '시나리오 이미지'}
              fill
              sizes="(max-width: 768px) 100vw, 750px"
              priority={currentId <= 2}
              style={{ objectFit: 'cover' }}
            />
          </ImageBox>
        )}
        {!isImage && content?.component && (
          <MotionBox
            key={`${currentId}-component`}
            initial={shouldAnimate ? { opacity: 0, y: 30 } : false}
            animate={{ opacity: 1, y: 0 }}
            exit={shouldAnimate ? { opacity: 0, y: -20 } : {}}
            transition={{ duration: 0.5 }}
          >
            <content.component {...content.props} />
          </MotionBox>
        )}
      </AnimatePresence>
    </Container>
  );
};

export default CenterWindow;
