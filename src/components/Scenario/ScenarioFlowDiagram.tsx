import React from 'react';
import styled from 'styled-components';
import { Typography } from '../../styles/Typhography';

const DiagramWrapper = styled.div`
  background-color: #fdf7e3;
  border: 2px solid #d4b28c;
  border-radius: 12px;
  padding: 2rem;
  margin: 0 auto;
  max-width: 760px;

  /* ✅ 적정 높이 조절 + 스크롤 */
  max-height: 80vh;
  overflow-y: auto;

  ${Typography.body};
`;

const Title = styled.h3`
  ${Typography.titleLG};
  color: #5d4037;
  margin-bottom: 2rem;
  text-align: center;
`;

const BoxRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  width: 100%;
`;

const Box = styled.div`
  background-color: #fff;
  border: 2px solid #a1887f;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  font-weight: 500;
  color: #3e2723;
  ${Typography.body};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Arrow = styled.div`
  font-size: 1.5rem;
  color: #6d4c41;
  text-align: center;
`;

const FlexRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: stretch;
  gap: 1.5rem;
  flex-wrap: wrap;

  > div {
    flex: 1;
    min-width: 160px;
  }
`;

const CodeBlock = styled.pre`
  margin-top: 1rem;
  background: #fff8e1;
  border: 1px dashed #a1887f;
  padding: 1rem;
  border-radius: 8px;
  color: #4e342e;
  white-space: pre-wrap;
  width: 100%;
  overflow-x: auto;
  ${Typography.caption};
`;

const ScenarioFlowDiagram: React.FC = () => {
  return (
    <DiagramWrapper>
      <Title>📘 시나리오 흐름 구성도</Title>
      <BoxRow>
        <Box>
          scenarioData
          <CodeBlock>{`id: 1 ~ scenarioData.length,
text: "예시 텍스트 창의 대사 출력 내용",
content: {
  type: "image" | "component",
  src?: string,
  alt?: string,
  component?: React.FC<any>,
  props?: Record<string, any>
}`}</CodeBlock>
        </Box>

        <Arrow>⬇️</Arrow>

        <FlexRow>
          <Box>
            TextWindow
            <br />
            <span>"예시 텍스트 창의 대사 출력 내용"</span>
          </Box>
          <Box>
            CenterWindow
            <br />
            <span>"img 또는 컴포넌트 내용 출력"</span>
          </Box>
        </FlexRow>
      </BoxRow>
    </DiagramWrapper>
  );
};

export default ScenarioFlowDiagram;
