// src/pages/MainWindow.tsx
import React from "react";
import styled from "styled-components";

interface UiWindowProps {
  isUiMode: boolean;
  toggleUi: () => void;
}

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
  pointer-events: none;
`;

const QuestionButton = styled.button<{ isUiMode: boolean }>`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.textBg};
  color: ${({ theme }) => theme.textTxt};
  font-size: 20px;
  cursor: pointer;
  border: none;
  pointer-events: auto; /* 👉 버튼만 클릭 가능 */
`;

// text 창 하단부부

const UiWindow: React.FC<UiWindowProps> = ({ isUiMode, toggleUi }) => {
  return (
    <Container>
      <QuestionButton
        isUiMode={isUiMode}
        onClick={(e) => {
          e.stopPropagation(); // 클릭 이벤트 전파 방지
          toggleUi();
        }}
      >
        ?
      </QuestionButton>
    </Container>
  );
};

export default UiWindow;
