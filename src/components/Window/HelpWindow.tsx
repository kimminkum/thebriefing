// src/components/Window/HelpWindow.tsx
import React from "react";
import styled from "styled-components";
import Button from "../Button";
import paper from "../../assets/img/bg/handmade-paper.png";
import { useNavigate } from "react-router-dom";

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
  background: #fdfaf5 url(${paper}) repeat;
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
  gap: calc(20 / 750 * 100%);
`;

const ButtonRow = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: calc(10 / 750 * 100%);
`;

const TutorialBtn = styled(Button)`
  background-color: transparent;
  color: #000;
  margin: calc(80 / 750 * 100%) 0;
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

const DataBtn = styled(Button)`
  background-color: transparent;
  color: #000;
  margin: 0 0 calc(80 / 750 * 100%);
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
  gap: calc(10 / 750 * 100%) calc(20 / 750 * 100%);
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
  const navigate = useNavigate();

  const goToDataPage = () => {
    toggleUi(); // 창 닫기
    navigate("/datapage"); // 경로 이동
  };

  return (
    <Container isUiMode={isUiMode}>
      <div>
        <TutorialBtn variant="outline" onClick={reopenTutorial}>
          📘 튜토리얼 다시 보기
        </TutorialBtn>

        <DataBtn variant="outline" onClick={goToDataPage}>
          📊 데이터 보기
        </DataBtn>

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
