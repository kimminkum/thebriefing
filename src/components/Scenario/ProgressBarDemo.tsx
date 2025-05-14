import React from "react";
import styled, { keyframes } from "styled-components";

// width 33% → 66% → 33% 반복
const progressAnimation = keyframes`
  0% {
    width: 11%;
  }
  100% {
    width: 99%;
  }
`;

const Wrapper = styled.div`
  padding: calc(30 / 654 * 100%);
  max-width: 690px;
  margin: 0 auto;
  background-color: #fefae0;
  border: 2px solid #e0c68c;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.06);
`;

const Title = styled.h3`
  font-weight: 600;
  margin-bottom: calc(20 / 586 * 100%);
  color: #5d4037;
`;

const SubTitle = styled.p`
  display: flex;
  align-items: flex-start;
  gap: calc(8 / 586 * 100%);
  color: #888;
  margin-bottom: calc(20 / 586 * 100%);
`;

const DescriptionList = styled.ul`
  margin-bottom: calc(20 / 586 * 100%);
  color: #333;
  padding-left: calc(10 / 576 * 100%);
  list-style-type: disc;
`;

const ListItem = styled.li`
  margin-bottom: calc(10 / 576 * 100%);
  will-change: transform;
  display: flex;
  gap: 4px;

  &::before {
    content: "·";
  }
`;

const BarWrapper = styled.div`
  width: 100%;
  height: 4px;
  background-color: #e0e0e0;
  border-radius: calc(6 / 586 * 100%);
  overflow: hidden;
  position: relative;
`;

const BarInner = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  background: linear-gradient(to right, #2b4d73, #4c6f91);
  animation: ${progressAnimation} 3s linear infinite;
  transform: translateZ(0);
`;

const ProgressBarDemo: React.FC = () => {
  return (
    <Wrapper className="font-20">
      <Title className="font-28">📍 진행 상황 표시</Title>
      <SubTitle className="font-22">
        <span role="img" aria-label="lightbulb">
          💡
        </span>
        이 컴포넌트는 사용자 경험을 고려하여 제작된 예시입니다
      </SubTitle>

      <DescriptionList>
        <ListItem>
          이 컴포넌트는 사용자의 이해를 돕기 위해 만든 예시입니다.
        </ListItem>
        <ListItem>
          프로그레스바는 사용자가 시나리오 흐름 중 현재 어느 위치에 있는지를
          직관적으로 파악할 수 있게 도와줍니다.
        </ListItem>
        <ListItem>
          사용자는 진행 상황을 시각적으로 인지함으로써 앞으로 남은 콘텐츠의 양을
          유추할 수 있고, 이는 몰입감을 높이는 데 중요한 역할을 합니다.
        </ListItem>
        <ListItem>
          상단 고정형 UI는 페이지 내 시선 이동을 최소화하면서도 지속적인
          피드백을 제공하여 UX의 안정성을 높입니다.
        </ListItem>
      </DescriptionList>
      <BarWrapper>
        <BarInner />
      </BarWrapper>
    </Wrapper>
  );
};

export default ProgressBarDemo;
