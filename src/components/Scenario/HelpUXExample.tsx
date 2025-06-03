import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
  background: linear-gradient(145deg, #ffffff, #f9f9f9);
  border-radius: 20px;
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.06);
  padding: 2rem 2rem 2.5rem;
  margin: 2rem auto;
  max-width: 720px;
  border: 2px solid #f1f1f1;
`;

const Arrow = styled.div`
  position: absolute;
  top: 14px;
  right: 24px;
  animation: bounce2 1.4s infinite;

  @keyframes bounce2 {
    0%,
    100% {
      transform: translateY(0) rotate(180deg);
    }
    50% {
      transform: translateY(6px) rotate(180deg);
    }
  }
`;

const Title = styled.h3`
  font-weight: bold;
  color: #222;
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;

  &::before {
    content: "🧭";
    margin-right: 0.5rem;
  }
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  padding: 0;
  margin: 0;
`;

const Item = styled.li`
  background: #ffffff;
  border: 1px solid #ddd;
  padding: 1rem;
  border-left: 6px solid #4caf50;
  border-radius: 10px;
  color: #333;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.03);
`;

const HelpUXExample: React.FC = () => {
  return (
    <Container className="font-20">
      <Arrow className="font-32">▼</Arrow>
      <Title className="font-24">UI/UX 요소 구성</Title>
      <List>
        <Item className="font-16">
          우측 상단의 <strong>'?'</strong> 버튼을 눌러{" "}
          <strong>설정창 및 튜토리얼 재확인</strong>이 가능합니다.
        </Item>
        <Item className="font-16">
          전체 화면일 경우 <strong>X 버튼은 좌측 상단</strong>에, 일반 모드에선{" "}
          <strong>하단 좌측에 '닫기 버튼'</strong> 배치를 고려했습니다.
        </Item>
        <Item className="font-16">
          <strong>모바일 환경 기준</strong>으로 시야 흐름에 따른 자연스러운
          위치에 버튼과 컨트롤 요소를 배치했습니다.
        </Item>
        <Item className="font-16">
          <strong>모바일 정렬 기준:</strong> 확인(우측), 취소(좌측) 배치를 통해
          UX 가이드에 부합하도록 구성했습니다.
        </Item>
      </List>
    </Container>
  );
};

export default HelpUXExample;
