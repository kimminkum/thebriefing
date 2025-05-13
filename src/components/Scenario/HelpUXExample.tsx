import React from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: calc(30 / 750 * 100%);
  border: 2px solid #ccc;
  border-radius: calc(12 / 750 * 100%);
  background: #fff;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  font-family: Pretendard, sans-serif;
`;

const Title = styled.p`
  font-weight: bold;
  margin-bottom: calc(20 / 750 * 100%);
`;

const List = styled.ul`
  padding-left: calc(30 / 750 * 100%);

  li {
    margin-bottom: calc(16 / 750 * 100%);
    line-height: 1.4;
  }
`;

const Inner = styled.div`
  padding-top: 40%;
`;

const HelpUXExample: React.FC = () => {
  return (
    <Inner>
      <Container className="font-20">
        <Title>📌 UI/UX 요소 구성</Title>
        <List>
          <li>‘?’ 버튼을 누르면 설정창 및 튜토리얼 재확인이 가능합니다.</li>
          <li>
            휴대폰 기능상 설정창에 대부분은 우측 상단에 배치되어 있습니다.
          </li>
          <li>
            X 버튼의 경우 풀 화면 기준 좌측 상단이 기준이고
            <br />
            그런 부분이 아니라면, 하단 좌측에 ‘닫기’ 등의 부정적 버튼을 배치하는
            방식을 생각하여 배치하였습니다.
          </li>
          <li>모바일 기준 시야에서 자연스러운 배치 고려</li>
          <li>버튼 정렬 기준: 확인(긍정)은 우측, 취소(부정)는 좌측</li>
        </List>
      </Container>
    </Inner>
  );
};

export default HelpUXExample;
