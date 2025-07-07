// src/components/Window/HelpWindow.tsx
import React from 'react';
import styled from 'styled-components';
import Button from '../Button';
import paper from '@assets/img/bg/handmade-paper.png';
import { useRouter } from 'next/router';
import { useUIStore } from '../../stores/uiStore';
import { Body, Highlight, Caption, Heading } from '../../styles/Typhography';

export interface HelpWindowProps {
  toggleUi: () => void;
  $isUiMode: boolean;
  typingSpeed: number;
  setTypingSpeed: (speed: number) => void;
  reopenTutorial: () => void;
}

const Container = styled.div<{ $isUiMode: boolean }>`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: #fdfaf5;
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

  /** 스크롤 처리 */
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  padding-bottom: 4rem; /* 닫기 버튼 여유 공간 확보 */
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.4rem;
  flex-grow: 1;
`;

const StickyBottom = styled.div`
  margin-top: auto;
  display: flex;
  justify-content: center;
  padding-top: 1rem;
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

const HelpWindow: React.FC<HelpWindowProps> = ({ $isUiMode, toggleUi, reopenTutorial }) => {
  const typingSpeed = useUIStore((s) => s.typingSpeed);
  const setTypingSpeed = useUIStore((s) => s.setTypingSpeed);
  const router = useRouter();

  return (
    <Container $isUiMode={$isUiMode}>
      <Section>
        <Heading>📘 튜토리얼</Heading>
        <Body>
          <Highlight>초기 흐름을 다시 보고 싶다면?</Highlight> 튜토리얼을 재실행해보세요.
        </Body>
        <StyledBtn onClick={reopenTutorial}>다시 보기</StyledBtn>

        <Divider />

        <Heading>📊 데이터 페이지</Heading>
        <Body>
          <Highlight>API와 상태 관리 흐름</Highlight>을 체험하고 싶다면 데이터 페이지로 이동하세요.
        </Body>
        <StyledBtn onClick={() => router.push('/datapage')}>이동</StyledBtn>

        <Divider />

        <Heading>✍️ 타이핑 속도</Heading>
        <Body>
          원하는 속도로 <Highlight>타이핑 출력</Highlight>을 조절할 수 있습니다.
        </Body>
        <RangeBox>
          <RangeLabel>
            현재 속도: <Caption>{typingSpeed}ms</Caption>
          </RangeLabel>
          <input
            type="range"
            min={2}
            max={20}
            step={1}
            value={typingSpeed}
            onChange={(e) => setTypingSpeed(Number(e.target.value))}
          />
        </RangeBox>
      </Section>

      <StickyBottom>
        <StyledBtn onClick={toggleUi}>닫기</StyledBtn>
      </StickyBottom>
    </Container>
  );
};

export default HelpWindow;
