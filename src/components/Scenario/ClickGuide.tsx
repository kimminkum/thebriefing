import React from 'react';
import styled from 'styled-components';
import { Typography } from '../../styles/Typhography'; // 경로는 프로젝트 구조에 따라 조정

const Container = styled.div`
  background: linear-gradient(135deg, #fffde7, #fff9c4);
  border: 2px solid #e0c8a4;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  border-radius: 16px;
  padding: calc(32 / 690 * 100%);
  margin: 0 auto;
  color: #333;

  /* 🔽 스크롤 가능하도록 설정 */
  max-height: 80vh;
  overflow-y: auto;

  ${Typography.body};
`;

const ParagraphGroup = styled.div`
  margin-bottom: calc(32 / 690 * 100%);
`;

const Title = styled.h3`
  display: flex;
  align-items: center;
  font-weight: 700;
  margin-bottom: calc(10 / 690 * 100%);
  color: #4e342e;
  ${Typography.titleMD};

  &::before {
    content: attr(data-icon);
    margin-right: 0.6rem;
    font-size: 1.2rem;
  }
`;

const Paragraph = styled.p`
  margin-bottom: calc(14 / 690 * 100%);
  ${Typography.body};
`;

const BoxLabel = styled.div`
  margin-top: calc(30 / 690 * 100%);
  padding: calc(20 / 690 * 100%);
  background-color: #f3f3f3;
  border-left: 6px solid #4caf50;
  border-radius: 10px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
  box-shadow: inset 0 0 4px rgba(0, 0, 0, 0.05);
  ${Typography.body};

  span {
    display: inline-block;
    animation: bounce 1.3s ease-in-out infinite;
    font-size: 1.2rem;
  }

  @keyframes bounce {
    0%,
    100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(5px);
    }
  }
`;

const ClickGuide: React.FC = () => {
  return (
    <Container>
      <ParagraphGroup>
        <Title data-icon="🧭">자연스러운 흐름 유도</Title>
        <Paragraph>
          튜토리얼을 보지 않았을 경우를 대비해, 사용자가 자연스럽게 다음 흐름을 따라갈 수 있도록
          직관적인 버튼들을 구성하였습니다.
        </Paragraph>
      </ParagraphGroup>

      <ParagraphGroup>
        <Title data-icon="↔️">진행 및 이전 버튼 안내</Title>
        <Paragraph>
          대사가 끝나면 우측 하단의 화살표 버튼을 통해 다음 진행을 안내하고, 이전 글을 놓쳤을
          경우에는 뒤로 돌아갈 수 있는 버튼도 함께 배치했습니다.
        </Paragraph>
      </ParagraphGroup>

      <ParagraphGroup>
        <Title data-icon="📜">로그 기록 및 토글 기능</Title>
        <Paragraph>
          로그는 데이터 페이지에 기록되도록 연결되어 있고, 콘텐츠가 길어졌을 때를 대비해 토글 버튼을
          활용해 접고 펼칠 수 있도록 구현했습니다.
        </Paragraph>
      </ParagraphGroup>

      <BoxLabel>
        <span>⬇️</span>
        아래는 실제 텍스트 박스에 대한 안내입니다
      </BoxLabel>
    </Container>
  );
};

export default ClickGuide;
