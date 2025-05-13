// src/components/Window/UiWindow.tsx
import React from "react";
import styled from "styled-components";
import Button from "../Button";

interface UiWindowProps {
  toggleUi: () => void;
}

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 7;
  pointer-events: none;
`;

const UiWindow: React.FC<UiWindowProps> = ({ toggleUi }) => {
  return (
    <Container>
      <Button
        type="button"
        onClick={(e) => {
          e.stopPropagation(); // 클릭 이벤트 전파 방지
          toggleUi();
        }}
        style={{
          position: "absolute",
          top: "16px",
          right: "16px",
          width: "40px",
          height: "40px",
          pointerEvents: "auto"
        }}
      >
        ?
      </Button>
    </Container>
  );
};

export default UiWindow;
