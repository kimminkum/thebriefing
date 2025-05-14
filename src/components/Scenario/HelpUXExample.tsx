import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
  padding: calc(30 / 654 * 100%);
  border: 2px solid #ccc;
  border-radius: 8px;
  background: #fff;
  width: 100%;
  margin: 0 auto;
`;

const Arrow = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;

  animation: bounce2 1.4s infinite;

  @keyframes bounce2 {
    0%,
    100% {
      transform: translateY(0) rotate(190deg);
    }
    50% {
      transform: translateY(6px) rotate(190deg);
    }
  }
`;

const Title = styled.p`
  font-weight: bold;
  margin-bottom: calc(20 / 586 * 100%);
`;

const List = styled.ul`
  padding-left: calc(30 / 586 * 100%);

  li {
    margin-bottom: calc(16 / 586 * 100%);
    display: flex;
    gap: 4px;
  }

  li::before {
    content: "·";
  }
`;

const HelpUXExample: React.FC = () => {
  return (
    <>
      <Container className="font-20">
        <Arrow className="font-32">▼</Arrow>
        <Title>📌 UI/UX 요소 구성</Title>
        <List>
          <li>
            우측 상단의 '?'버튼을 누르면 설정창 및<br /> 튜토리얼 재확인이
            가능합니다.
          </li>
          <li>
            X 버튼의 경우 풀 화면 기준 좌측 상단이 기준이고
            <br />
            그런 부분이 아니라면, 하단 좌측에 ‘닫기’버튼 등<br /> 부정적 버튼을
            배치하는 방식을 생각하였습니다.
          </li>
          <li>모바일 기준 시야에서 자연스러운 배치 고려</li>
          <li>
            모바일 버튼 정렬 기준:
            <br />
            확인(긍정)은 우측, 취소(부정)는 좌측
          </li>
        </List>
      </Container>
    </>
  );
};

export default HelpUXExample;
