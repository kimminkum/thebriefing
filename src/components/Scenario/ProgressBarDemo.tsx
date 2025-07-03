import React from 'react';
import styled, { keyframes } from 'styled-components';

// 프로그레스 바 애니메이션
const progressAnimation = keyframes`
  0% { width: 0%; }
  100% { width: 100%; }
`;

// 전체 Wrapper
const Wrapper = styled.div`
  padding: calc(36 / 690 * 100%);
  max-width: 700px;
  margin: 2rem auto;
  background: linear-gradient(145deg, #fffef7, #fcf5e7);
  border: 1px solid #e0c68c;
  border-radius: 16px;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.06);
`;

// 타이틀
const Title = styled.h3`
  font-weight: 700;
  color: #4e342e;
  margin-bottom: 1rem;
  font-size: 1.3rem;

  &::before {
    content: '📍';
    margin-right: 0.5rem;
  }
`;

// 서브 타이틀
const SubTitle = styled.p`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 500;
  color: #888;
  margin-bottom: 1.5rem;

  &::before {
    content: '💡';
    font-size: 1.1rem;
  }
`;

// 리스트
const DescriptionList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const ListItem = styled.li`
  padding: 0.85rem 1rem;
  background: #fff;
  border-left: 4px solid #4caf50;
  border-radius: 8px;
  color: #333;
  font-size: 0.95rem;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.03);
  line-height: 1.5;

  &::before {
    content: '✔ ';
    color: #4caf50;
    margin-right: 0.3rem;
  }
`;

// 진행 바
const BarWrapper = styled.div`
  width: 100%;
  height: 6px;
  background-color: #ddd;
  border-radius: 12px;
  overflow: hidden;
`;

const BarInner = styled.div`
  height: 100%;
  background: linear-gradient(to right, #2196f3, #00bcd4);
  animation: ${progressAnimation} 3s infinite alternate ease-in-out;
  width: 50%; // 실제로는 퍼센트 props를 받아도 됩니다
`;

const ProgressBarDemo: React.FC = () => {
  return (
    <Wrapper className="font-20">
      <Title className="font-28">진행 상황 표시</Title>
      <SubTitle>이 컴포넌트는 사용자 경험을 고려하여 제작된 예시입니다</SubTitle>

      <DescriptionList>
        <ListItem>이 컴포넌트는 사용자의 이해를 돕기 위해 만든 예시입니다.</ListItem>
        <ListItem>프로그레스바는 시나리오 중 현재 위치를 시각적으로 안내합니다.</ListItem>
        <ListItem>
          사용자는 진행 상황을 인지함으로써 남은 양을 예측하며 몰입할 수 있습니다.
        </ListItem>
        <ListItem>상단 고정형 UI는 시선 이동을 줄여 안정성을 높입니다.</ListItem>
      </DescriptionList>

      <BarWrapper>
        <BarInner />
      </BarWrapper>
    </Wrapper>
  );
};

export default ProgressBarDemo;
