import React from "react";
import styled from "styled-components";
import Button from "../Button";

interface HelpWindowProps {
  toggleUi: () => void;
  isUiMode: boolean;
  typingSpeed: number;
  setTypingSpeed: React.Dispatch<React.SetStateAction<number>>;
  reopenTutorial: () => void;
}

const Container = styled.div<{ isUiMode: boolean }>`
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.textTxt};
  color: ${({ theme }) => theme.textBg};
  border-radius: 10px;
  padding: 1.4rem;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-in-out;
  z-index: 8;
  transform: ${({ isUiMode }) =>
    isUiMode ? "translateY(0%)" : "translateY(100%)"};
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: transparent;
  border: none;
  color: ${({ theme }) => theme.textBg};
  font-size: 1.25rem;
  cursor: pointer;
`;

const RangeLabel = styled.label`
  display: block;
  margin-top: 1.25rem;
  font-size: 0.95rem;
`;

const HelpWindow: React.FC<HelpWindowProps> = ({
  isUiMode,
  toggleUi,
  typingSpeed,
  setTypingSpeed,
  reopenTutorial
}) => {
  return (
    <Container isUiMode={isUiMode}>
      <Button variant="primary" onClick={reopenTutorial}>
        📘 튜토리얼 다시 보기
      </Button>

      <RangeLabel>
        ✍️ 타이핑 속도 조절
        <input
          type="range"
          min={10}
          max={100}
          step={10}
          value={typingSpeed}
          onChange={(e) => setTypingSpeed(Number(e.target.value))}
        />
      </RangeLabel>

      <CloseButton onClick={toggleUi}>×</CloseButton>
    </Container>
  );
};

export default HelpWindow;
