import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: calc(20 / 654 * 100%) calc(20 / 654 * 100%) calc(40 / 654 * 100%);
  margin: 0 auto;
  background-color: #f8f8f8;
  border: 2px dashed #ccc;
  border-radius: 12px;
`;

const Title = styled.h3`
  margin-bottom: calc(24 / 584 * 100%);
  font-weight: bold;
`;

const Description = styled.p`
  color: #333;
`;

const DemoBox = styled.div`
  background-color: #fefae0;
  padding: calc(30 / 584 * 100%);
  border-radius: 8px;
  color: #333;
  margin: calc(16 / 584 * 100%) 0;
`;

const CodeBox = styled.pre``;

const MobileSpacingDemo: React.FC = () => {
  return (
    <Wrapper className="font-20">
      <Title>📱 모바일 대응 폰트 및 여백 전략</Title>
      <Description>
        작은 화면에서 너무 큰 폰트는 콘텐츠 밀도를 해치고, 너무 작은 폰트는
        가독성을 해칩니다.
        <br /> 이 컴포넌트는 기본을 14px로 두되, 필요한 경우 12px까지 줄이며
        `clamp()`로 디바이스 크기에 따라 자연스럽게 조정됩니다.
        <br />
        <br />
        또한 여백의 경우 calc형태로 관리하고 있습니다.
        <br /> absolute로 띄운 경우 top, bottom의 값은 0 으로 처리후 너비값에
        영향을 받는 margin-top이나 margin-bottom값으로 계산하고 있습니다.
      </Description>

      <DemoBox className="font-16">
        <CodeBox>
          {`font-size:
  clamp(14px, calc(20 / 750 * 100vw), 20px);
line-height: calc(32 / 20);

예시 여백 - 텍스트 창의 이전 버튼
bottom: 0;
margin-bottom: calc(28 / 734 * 100%);`}
        </CodeBox>
      </DemoBox>
    </Wrapper>
  );
};

export default MobileSpacingDemo;
