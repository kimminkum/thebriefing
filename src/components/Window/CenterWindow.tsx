// src/pages/MainWindow.tsx
import React from "react";
import styled from "styled-components";
import { contentData } from "../../data/contentData";
import { motion, AnimatePresence } from "framer-motion";

interface ContentItem {
  id: number;
  type: "image" | "component";
  src?: string;
  alt?: string;
  component?: React.ElementType; // ✅ React.FC<any> 대신 ElementType 사용
  props?: Record<string, any>;
}

interface CenterWindowProps {
  currentId: number;
  textIndex: number;
  handleClick: () => void;
}

const MotionContainer = styled(motion.div)`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`;

const Container = styled.div`
  background: ${({ theme }) => theme.textBg};
  color: ${({ theme }) => theme.textTxt};
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CenterWindow: React.FC<CenterWindowProps> = ({
  currentId,
  textIndex,
  handleClick,
}) => {
  // ✅ 현재 ID에 해당하는 데이터 찾기 (find 방식)
  const currentContent: ContentItem | undefined = contentData.find(
    (item) => item.id === currentId
  );

  if (!currentContent) return <Container>콘텐츠 없음</Container>; // ✅ 예외 처리

  return (
    <Container onClick={handleClick}>
      <AnimatePresence mode="wait">
        <MotionContainer
          key={`${currentId}-${textIndex}`}
          initial={{ opacity: 0, y: 30, rotateZ: -2 }}
          animate={{ opacity: 1, y: 0, rotateZ: 0 }}
          exit={{ opacity: 0, y: -20, rotateZ: 3 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          {currentContent.type === "image" && currentContent.src && (
            <img
              src={currentContent.src}
              alt={currentContent.alt || "이미지"}
              width="100%"
            />
          )}
          {currentContent.type === "component" && currentContent.component && (
            <currentContent.component {...currentContent.props} />
          )}
        </MotionContainer>
      </AnimatePresence>
    </Container>
  );
};

export default CenterWindow;
