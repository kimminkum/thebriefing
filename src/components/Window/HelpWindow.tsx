// src/components/Window/HelpWindow.tsx
import React from "react";
import styled from "styled-components";
import Button from "../Button";
import cleangpaper from "../../assets/img/bg/clean-gray-paper.png";

interface HelpWindowProps {
  toggleUi: () => void;
  isUiMode: boolean;
  typingSpeed: number;
  setTypingSpeed: React.Dispatch<React.SetStateAction<number>>;
  reopenTutorial: () => void;
}

const Container = styled.div<{ isUiMode: boolean }>`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background: #fdfaf5 url(${cleangpaper}) repeat;
  background-size: cover;
  color: #111;
  border-radius: 10px 10px 0 0;
  padding: 2rem;
  box-shadow: 0px -2px 8px rgba(0, 0, 0, 0.05);
  transform: ${({ isUiMode }) =>
    isUiMode ? "translateY(0%)" : "translateY(100%)"};
  -webkit-transition: transform 0.3s ease;
  -moz-transition: transform 0.3s ease;
  -ms-transition: transform 0.3s ease;
  -o-transition: transform 0.3s ease;
  transition: transform 0.3s ease;
  z-index: 8;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const RangeLabel = styled.label`
  margin: 0;
  display: flex;
  gap: 1.2rem;
`;

const ButtonRow = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 0.5rem;
`;

const TutorialBtn = styled(Button)`
  background-color: transparent;
  color: #000;
  margin-bottom: calc(40 / 750 * 100%);
  -webkit-transition: background 0.2s ease;
  -moz-transition: background 0.2s ease;
  -ms-transition: background 0.2s ease;
  -o-transition: background 0.2s ease;
  transition: background 0.2s ease;
  border: 1px solid #000;

  &:hover {
    background: #eee;
  }
`;

const ExitBtn = styled(Button)`
  background-color: transparent;
  color: #000;
  border: 1px solid #000;
  padding: 0.5rem 1.5rem;
  transition: all 0.3s ease;
  -webkit-transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  -ms-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;

  &:hover {
    background-color: #eee;
  }
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
      <div>
        <TutorialBtn variant="outline" onClick={reopenTutorial}>
          📘 튜토리얼 다시 보기
        </TutorialBtn>

        <RangeLabel className="font-24">
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
      </div>

      <ButtonRow>
        <ExitBtn variant="outline" onClick={toggleUi}>
          닫기
        </ExitBtn>
      </ButtonRow>
    </Container>
  );
};

export default HelpWindow;
