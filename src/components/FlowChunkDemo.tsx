import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  background: #fdfaf5;
  border: 2px solid #444;
  border-radius: 12px;
  padding: calc(60 / 750 * 100vw) calc(20 / 750 * 100vw);
  color: #222;
`;

const Step = styled.div`
  position: relative;
  padding: calc(20 / 750 * 100vw) calc(20 / 750 * 100vw);
  margin-bottom: calc(60 / 750 * 100%);
  background: #fff;
  border-radius: 6px;
  box-shadow: 2px 2px 0 #aaa;
`;

const Arrow = styled.div`
  margin: calc(-20 / 750 * 100vw) 0 calc(30 / 750 * 100vw)
    calc(20 / 750 * 100vw);
  color: #4a90e2;
`;

const FlowChunkSteps: React.FC = () => {
  return (
    <Wrapper className="font-20">
      <Step>
        ① 텍스트가 길면 일정 길이로 <strong>분할 출력</strong>됩니다.
      </Step>
      <Arrow>⬇</Arrow>
      <Step>
        ② <strong>같은 id</strong> 안에서는 화면 전환 없이 다음 텍스트가
        이어집니다.
      </Step>
      <Arrow>⬇</Arrow>
      <Step>
        ③ 마지막 텍스트 조각이 출력되면 <strong>id가 증가</strong>합니다.
      </Step>
      <Arrow>⬇</Arrow>
      <Step>
        ④ <strong>화면이 전환되며 새로운 콘텐츠</strong>가 등장합니다.
      </Step>
    </Wrapper>
  );
};

export default FlowChunkSteps;
