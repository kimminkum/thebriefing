import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  background: #fdfaf5;
  border: 2px solid #e0c8a4;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.03);
  border-radius: 16px;
  padding: 24px;
  max-width: 720px;
  margin: 0 auto;
  text-align: center;
`;

const Title = styled.h3`
  font-size: 1.4rem;
  font-weight: 700;
  margin-bottom: 16px;
  color: #5d4037;
`;

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 16px;
`;

const StepBox = styled.div`
  flex: 1 1 40%;
  background: #fff;
  border: 1px solid #d7ccc8;
  border-radius: 12px;
  padding: 16px;
  min-width: 140px;
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.05);
`;

const StepLabel = styled.div`
  font-weight: 600;
  margin-bottom: 12px;
`;

const StepDesc = styled.div`
  font-size: 14px;
  color: #555;
`;

const FlowChunkCompact: React.FC = () => {
  return (
    <Wrapper>
      <Title>📝 텍스트 출력 방식 안내</Title>
      <Grid>
        <StepBox>
          <StepLabel>✂️분할 출력</StepLabel>
          <StepDesc>텍스트가 길면 조각 단위로 나뉘어 출력돼요.</StepDesc>
        </StepBox>

        <StepBox>
          <StepLabel>🔁id 내 연속</StepLabel>
          <StepDesc>같은 id에서는 전환 없이 이어집니다.</StepDesc>
        </StepBox>

        <StepBox>
          <StepLabel>🔼id 증가</StepLabel>
          <StepDesc>마지막 조각 후 id가 증가해요.</StepDesc>
        </StepBox>

        <StepBox>
          <StepLabel>🎬콘텐츠 전환</StepLabel>
          <StepDesc>id가 바뀌면 새 콘텐츠가 등장합니다.</StepDesc>
        </StepBox>
      </Grid>
    </Wrapper>
  );
};

export default FlowChunkCompact;
