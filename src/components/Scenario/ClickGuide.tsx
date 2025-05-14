import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: #fffde7;
  border: 2px solid #fdd835;
  border-radius: 8px;
  padding: calc(30 / 654 * 100%);
  margin: 0 auto;
  color: #333;
`;

const ParagraphGroup = styled.div`
  margin-bottom: calc(40 / 585 * 100%);
`;

const Title = styled.h3`
  margin-bottom: calc(10 / 585 * 100%);
  color: #5d4037;
  font-weight: 600;
`;

const Paragraph = styled.p`
  margin-bottom: calc(20 / 585 * 100%);
`;

const BoxLabel = styled.div`
  margin-top: calc(30 / 585 * 100%);
  padding: calc(20 / 585 * 100%);
  background-color: #f0f0f0;
  border-radius: calc(10 / 585 * 100%);
  font-weight: bold;
  text-align: center;

  span {
    animation: bounce 1.4s infinite;
    display: inline-block;
    margin-right: calc(20 / 690 * 100%);
  }

  @keyframes bounce {
    0%,
    100% {
      transform: translateY(0) rotate(0);
    }
    50% {
      transform: translateY(6px) rotate(0);
    }
  }
`;

const ClickGuide: React.FC = () => {
  return (
    <Container className="font-20">
      <ParagraphGroup>
        <Title className="font-24">🧭 자연스러운 흐름 유도</Title>
        <Paragraph>
          튜토리얼을 보지 않았을 경우를 대비해, 사용자가 자연스럽게 다음 흐름을
          따라갈 수 있도록 직관적인 버튼들을 구성하였습니다.
        </Paragraph>
      </ParagraphGroup>

      <ParagraphGroup>
        <Title className="font-24">↔️ 진행 및 이전 버튼 안내</Title>
        <Paragraph>
          대사가 끝나면 우측 하단의 화살표 버튼을 통해 다음 진행을 안내하고,
          이전 글을 놓쳤을 경우에는 뒤로 돌아갈 수 있는 버튼도 함께
          배치했습니다.
        </Paragraph>
      </ParagraphGroup>

      <ParagraphGroup>
        <Title className="font-24">📜 로그 기록 및 토글 기능</Title>
        <Paragraph>
          로그는 데이터 페이지에 기록되도록 연결되어 있고, 콘텐츠가 길어졌을
          때를 대비해 토글 버튼을 활용해 접고 펼칠 수 있도록 구현했습니다.
        </Paragraph>
      </ParagraphGroup>

      <BoxLabel>
        <span>⬇️</span> 아래는 실제 텍스트 박스에 대한 안내입니다
      </BoxLabel>
    </Container>
  );
};

export default ClickGuide;
