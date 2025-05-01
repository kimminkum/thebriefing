// src/components/Window/CenterWindow.tsx
import React from "react";
import styled from "styled-components";
import { contentData } from "../../data/contentData";
import { motion, AnimatePresence } from "framer-motion";

interface Props {
  currentId: number;
  textIndex: number;
  handleClick: () => void;
}

const Container = styled.div`
  width: auto;
  height: 100%;
  padding: 16px;
  margin: 16px;
  box-sizing: border-box;
  background: #f8f8f8;
  border: 1px solid #ccc;
  border-radius: 2px;
  border-bottom: none;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.1);
  overflow-y: auto;
`;

const MotionBox = styled(motion.div)`
  width: 100%;
  height: 100%;
`;

const CenterWindow: React.FC<Props> = ({
  currentId,
  textIndex,
  handleClick
}) => {
  const currentContent = contentData.find((item) => item.id === currentId);

  if (!currentContent) return <Container>콘텐츠 없음</Container>;

  return (
    <Container onClick={handleClick}>
      <AnimatePresence mode="wait">
        <MotionBox
          key={`${currentId}-${textIndex}`}
          initial={{ opacity: 0, y: 30, rotateZ: -2 }}
          animate={{ opacity: 1, y: 0, rotateZ: 0 }}
          exit={{ opacity: 0, y: -20, rotateZ: 3 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          {currentContent.type === "image" && currentContent.src && (
            <img
              src={currentContent.src}
              alt={currentContent.alt || ""}
              width="100%"
            />
          )}
          {currentContent.type === "component" && currentContent.component && (
            <currentContent.component {...currentContent.props} />
          )}
        </MotionBox>
      </AnimatePresence>
    </Container>
  );
};

export default CenterWindow;
