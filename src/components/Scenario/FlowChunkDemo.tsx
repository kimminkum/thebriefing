import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  background: #fdfaf5;
  border: 2px solid #ccc;
  border-radius: 16px;
  padding: calc(40 / 690 * 100%) calc(20 / 690 * 100%);
  max-width: 100%;
`;

const StepCard = styled.div`
  background: #ffffff;
  border-radius: 12px;
  border: 1px solid #ddd;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  padding: calc(20 / 690 * 100%) calc(24 / 690 * 100%);
  display: flex;
  align-items: flex-start;
  gap: calc(16 / 690 * 100%);
  position: relative;
`;

const StepNumber = styled.div`
  min-width: 30px;
  font-weight: bold;
  color: #4a90e2;
  font-size: clamp(14px, calc(20 / 690 * 100vw), 20px);
`;

const StepText = styled.p`
  margin: 0;
  color: #333;
  font-weight: 500;
  line-height: 1.6;
  strong {
    color: #000;
  }
`;

const Arrow = styled.div`
  text-align: center;
  font-size: clamp(16px, calc(28 / 690 * 100vw), 28px);
  color: #4a90e2;
  margin: calc(10 / 690 * 100%) 0;
`;

const FlowChunkSteps: React.FC = () => {
  return (
    <Wrapper className="font-20">
      <StepCard>
        <StepNumber>①</StepNumber>
        <StepText>
          텍스트가 길면 일정 길이로 <strong>분할 출력</strong>됩니다.
        </StepText>
      </StepCard>

      <Arrow>⬇️</Arrow>

      <StepCard>
        <StepNumber>②</StepNumber>
        <StepText>
          <strong>같은 id</strong> 안에서는 화면 전환 없이 다음 텍스트가
          이어집니다.
        </StepText>
      </StepCard>

      <Arrow>⬇️</Arrow>

      <StepCard>
        <StepNumber>③</StepNumber>
        <StepText>
          마지막 텍스트 조각이 출력되면 <strong>id가 증가</strong>합니다.
        </StepText>
      </StepCard>

      <Arrow>⬇️</Arrow>

      <StepCard>
        <StepNumber>④</StepNumber>
        <StepText>
          <strong>화면이 전환되며 새로운 콘텐츠</strong>가 등장합니다.
        </StepText>
      </StepCard>
    </Wrapper>
  );
};

export default FlowChunkSteps;
