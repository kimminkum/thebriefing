// src/components/FlowSummary.tsx
import React from "react";
import styled from "styled-components";

const Box = styled.div`
  padding: 2rem;
  background: #fff;
  border: 2px dashed #ccc;
  font-size: 1rem;
  height: 100%;
`;

const Item = styled.div`
  margin-bottom: 0.75rem;
  &:before {
    content: "📌 ";
  }
`;

const BlurredSection = styled.div`
  min-height: 13vh;
  filter: blur(3px);
  opacity: 1;
`;

const FlowSummary: React.FC = () => {
  return (
    <Box>
      <Item>장단점 요약</Item>
      <BlurredSection>
        ~~~~~~~~~~~~~~~~~~~~
        <br />
        ----------------------
        <br />
        ~~~~~~~~~~~~~~~~~~~~
        <br />
        ----------------------
        <br />
      </BlurredSection>
      <Item>지원동기 & 보유 기술 스택</Item>
      <BlurredSection>
        ~~~~~~~~~~~~~~~~~~~~
        <br />
        ----------------------
        <br />
        ~~~~~~~~~~~~~~~~~~~~
        <br />
        ----------------------
        <br />
      </BlurredSection>
      <Item>자신만의 강점</Item>
      <BlurredSection>
        ~~~~~~~~~~~~~~~~~~~~
        <br />
        ----------------------
        <br />
        ~~~~~~~~~~~~~~~~~~~~
        <br />
        ----------------------
        <br />
      </BlurredSection>
      <Item>주요 프로젝트 1~2개 요약</Item>
      <BlurredSection style={{ height: "40vh" }}>
        ~~~~~~~~~~~~~~~~~~~~
        <br />
        ----------------------
        <br />
        ~~~~~~~~~~~~~~~~~~~~
        <br />
        ----------------------
        <br />
        ~~~~~~~~~~~~~~~~~~~~
        <br />
        ----------------------
        <br />
        ~~~~~~~~~~~~~~~~~~~~
        <br />
        ----------------------
        <br />
        ~~~~~~~~~~~~~~~~~~~~
        <br />
        ----------------------
        <br />
        ~~~~~~~~~~~~~~~~~~~~
        <br />
        ----------------------
        <br />
        ----------------------
        <br />
        ~~~~~~~~~~~~~~~~~~~~
        <br />
        ----------------------
        <br />
        ~~~~~~~~~~~~~~~~~~~~
        <br />
      </BlurredSection>
    </Box>
  );
};

export default FlowSummary;
