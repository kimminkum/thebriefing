// src/components/Window/HelpWindow.tsx
import React from 'react';
import styled from 'styled-components';
import Button from '../Button';
import paper from '@assets/img/bg/handmade-paper.png';
import { useRouter } from 'next/router';
import { useUIStore } from '../../stores/uiStore';
export interface HelpWindowProps {
  toggleUi: () => void;
  $isUiMode: boolean;
  typingSpeed: number; // ✅ 추가
  setTypingSpeed: (speed: number) => void; // ✅ 추가
  reopenTutorial: () => void;
}

const Container = styled.div<{ $isUiMode: boolean }>`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: #fdfaf5; // ✅ 확정 배경
  background-image: url(${() => paper.src});
  background-repeat: repeat;
  background-size: cover;
  color: #111;
  border-radius: 10px 10px 0 0;
  padding: 2rem;
  transform: ${({ $isUiMode }) => ($isUiMode ? 'translateY(0%)' : 'translateY(100%)')};
  transition: transform 0.3s ease;
  z-index: 9;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.4rem;
`;

const SectionTitle = styled.div`
  font-weight: 700;
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  color: #333;
`;

const Divider = styled.hr`
  width: 100%;
  border: none;
  border-top: 1px dashed #ccc;
  margin: 1.2rem 0;
`;

const StyledBtn = styled(Button)`
  background: transparent;
  color: #111;
  border: 1px solid #111;
  padding: 0.7rem 1.2rem;
  transition: background 0.2s;

  &:hover {
    background: #eee;
  }
`;

const RangeBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: center;
`;

const RangeLabel = styled.label`
  font-weight: bold;
  font-size: 1.05rem;
`;

const InputRange = styled.input`
  width: 60%;
`;

const HelpWindow: React.FC<HelpWindowProps> = ({ $isUiMode, toggleUi, reopenTutorial }) => {
  const typingSpeed = useUIStore((s) => s.typingSpeed);
  const setTypingSpeed = useUIStore((s) => s.setTypingSpeed);
  const router = useRouter();

  return (
    <Container $isUiMode={$isUiMode}>
      <Section>
        <SectionTitle>📘 튜토리얼</SectionTitle>
        <StyledBtn onClick={reopenTutorial}>다시 보기</StyledBtn>

        <Divider />

        <SectionTitle>📊 데이터 페이지</SectionTitle>
        <StyledBtn onClick={() => router.push('/datapage')}>이동</StyledBtn>

        <Divider />

        <SectionTitle>✍️ 타이핑 속도</SectionTitle>
        <RangeBox>
          <RangeLabel>{typingSpeed}ms</RangeLabel>
          <InputRange
            type="range"
            min={2}
            max={20}
            step={1}
            value={typingSpeed}
            onChange={(e) => setTypingSpeed(Number(e.target.value))}
          />
        </RangeBox>
      </Section>

      <StyledBtn onClick={toggleUi}>닫기</StyledBtn>
    </Container>
  );
};

export default HelpWindow;
