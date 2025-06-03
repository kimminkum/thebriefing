import React from "react";
import styled from "styled-components";

const DiagramWrapper = styled.div`
  padding: calc(30 / 654 * 100%);
  max-width: 690px;
  margin: 0 auto;
  background-color: #fdf7e3;
  border: 2px solid #d4b28c;
  border-radius: 4px;
  font-family: Pretendard, sans-serif;
`;

const Title = styled.h3`
  font-weight: 600;
  color: #5d4037;
  margin-bottom: calc(20 / 596 * 100%);
`;

const BoxRow = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: calc(12 / 586 * 100%);
  flex-wrap: wrap;
`;

const Box = styled.div`
  background-color: #fff;
  border: 2px solid #a1887f;
  padding: calc(20 / 690 * 100%);
  border-radius: 10px;
  text-align: center;
  font-weight: 500;
  color: #3e2723;
  position: relative;
`;

const Arrow = styled.div`
  flex: 0;
  font-size: 20px;
  color: #6d4c41;
  margin: 0 30px;
`;

const Flex = styled.div`
  display: flex;
  justify-content: center;
  gap: calc(30 / 600 * 100%);

  > div {
    width: 50%;
  }
`;

const CodeBlock = styled.pre`
  background: #fff8e1;
  border: 1px dashed #a1887f;
  padding: calc(16 / 439 * 100%);
  border-radius: 8px;
  color: #4e342e;
  white-space: pre-wrap;
  line-height: 1.5;
`;

const ScenarioFlowDiagram: React.FC = () => {
  return (
    <DiagramWrapper className="font-20">
      <Title className="font-28">📘 시나리오 흐름 구성도</Title>
      <BoxRow>
        <Box>
          scenarioData{" "}
          <CodeBlock className="font-16">{`id: 1 ~ scenarioData.length,
  text: "예시 텍스트 창의 대사 출력 내용",
  content: {
    type: "image" | "component",
    src?: string,
    alt?: string,
    component?: React.FC<any>,
    props?: Record<string, any>
  }`}</CodeBlock>
        </Box>
        <Flex>
          <Arrow>⬇️</Arrow>
          <Arrow>⬇️</Arrow>
        </Flex>
        <Flex>
          <Box>
            TextWindow
            <br />
            "예시 텍스트 창의 대사 출력 내용"
          </Box>
          <Box>
            CenterWindow
            <br />
            "img 또는 컴포넌트 내용 출력"
          </Box>
        </Flex>
      </BoxRow>
    </DiagramWrapper>
  );
};

export default ScenarioFlowDiagram;
