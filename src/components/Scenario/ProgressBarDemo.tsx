import React from 'react';
import styled, { keyframes } from 'styled-components';

// 애니메이션
const progressAnimation = keyframes`
  0% { width: 0%; }
  100% { width: 60%; }
`;

// 전체 Wrapper
const Wrapper = styled.section`
  padding: clamp(1.5rem, 4vw, 2.5rem);
  margin: 2rem auto;
  max-width: 720px;
  background: linear-gradient(145deg, #fffdf5, #fef9ec);
  border: 1px solid #e6d2a5;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.04);
  overflow-y: auto;
`;

// 타이틀
const Title = styled.h2`
  font-size: clamp(1.5rem, 2.5vw, 2rem);
  font-weight: 700;
  color: #3e2723;
  margin-bottom: 1rem;

  &::before {
    content: '📍';
    margin-right: 0.5rem;
  }
`;

// 부제목
const SubTitle = styled.p`
  display: flex;
  align-items: center;
  font-size: clamp(1rem, 1.8vw, 1.15rem);
  font-weight: 500;
  color: #666;
  margin-bottom: 1.75rem;

  &::before {
    content: '💡';
    margin-right: 0.5rem;
    font-size: 1.2rem;
  }
`;

// 설명 리스트
const DescriptionList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
  padding: 0;
  list-style: none;
`;

const ListItem = styled.li`
  background: #ffffff;
  border-left: 4px solid #4caf50;
  padding: 0.9rem 1rem;
  border-radius: 8px;
  color: #333;
  font-size: 0.95rem;
  line-height: 1.5;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.03);

  &::before {
    content: '✔';
    color: #4caf50;
    margin-right: 0.5rem;
  }
`;

// 진행바 Wrapper
const BarWrapper = styled.div`
  width: 100%;
  height: 8px;
  background-color: #eee;
  border-radius: 8px;
  overflow: hidden;
`;

// 진행바 내부
const BarInner = styled.div`
  height: 100%;
  width: 60%; // 퍼센트 props로 대체 가능
  background: linear-gradient(to right, #2196f3, #00bcd4);
  animation: ${progressAnimation} 3s ease-in-out infinite alternate;
`;

// 컴포넌트 본체
const ProgressBarDemo: React.FC = () => {
  return (
    <Wrapper>
      <Title>진행 상황 표시</Title>
      <SubTitle>사용자 경험을 고려한 예시 컴포넌트입니다</SubTitle>

      <DescriptionList>
        <ListItem>이 컴포넌트는 사용자의 이해를 돕기 위해 구성된 예시입니다.</ListItem>
        <ListItem>프로그레스바는 현재 위치를 시각적으로 안내합니다.</ListItem>
        <ListItem>진행률 인지를 통해 사용자의 몰입도를 높일 수 있습니다.</ListItem>
        <ListItem>상단 고정형 구조로 안정적인 시야 흐름을 유도합니다.</ListItem>
      </DescriptionList>

      <BarWrapper>
        <BarInner />
      </BarWrapper>
    </Wrapper>
  );
};

export default ProgressBarDemo;
