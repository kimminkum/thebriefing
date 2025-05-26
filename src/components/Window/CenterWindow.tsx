import React, { useRef, useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { scenarioData } from "../../data/scenarioData";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface Props {
  currentId: number;
  textIndex: number;
  handleClick: () => void;
}

interface ContainerProps {
  isImage: boolean;
}

const Container = styled.div<ContainerProps>`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  min-height: 100%;
  box-sizing: border-box;
  padding: 0;
  margin: 0;
`;

const MotionBox = styled(motion.div)`
  width: 100%;
  padding: min(calc(120 / 734 * 100%), 80px) calc(40 / 734 * 100%) 0;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.04);
  background-color: transparent;
  border-radius: 8px;
  font-family: Pretendard, sans-serif;

  & > *:not(:last-child) {
    margin-bottom: calc(40 / 742 * 100%);
  }
`;

const ImageBox = styled(motion.div)`
  width: 100%;
  height: 100vh;
  padding: calc(80 / 742 * 100%) calc(40 / 742 * 100%);
  overflow: hidden;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
`;

const CenterWindow: React.FC<Props> = ({
  currentId,
  textIndex,
  handleClick
}) => {
  const prevId = useRef(currentId);
  const [shouldAnimate, setShouldAnimate] = useState(true);

  useEffect(() => {
    setShouldAnimate(prevId.current !== currentId);
    prevId.current = currentId;
  }, [currentId]);

  const currentScenario = scenarioData.find((item) => item.id === currentId);
  const content = currentScenario?.content;
  const isImage = content?.type === "image";

  if (!currentScenario)
    return <Container isImage={false}>콘텐츠 없음</Container>;

  return (
    <Container onClick={handleClick} isImage={isImage}>
      <AnimatePresence mode="wait">
        {isImage && content?.src && (
          <ImageBox
            key={`${currentId}`}
            initial={shouldAnimate ? { opacity: 0 } : false}
            animate={{ opacity: 1 }}
            exit={shouldAnimate ? { opacity: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <Image
              src={content.src}
              alt={content.alt || ""}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              sizes="(max-width: 768px) 100vw, 750px"
            />
          </ImageBox>
        )}

        {!isImage && content?.component && (
          <MotionBox
            key={`${currentId}`}
            initial={shouldAnimate ? { opacity: 0, y: 30, rotateZ: -2 } : false}
            animate={{ opacity: 1, y: 0, rotateZ: 0 }}
            exit={shouldAnimate ? { opacity: 0, y: -20, rotateZ: 3 } : {}}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            <content.component {...content.props} />
          </MotionBox>
        )}
      </AnimatePresence>
    </Container>
  );
};

export default CenterWindow;
