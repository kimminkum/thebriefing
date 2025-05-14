import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: calc(24 / 600 * 100%);
  margin: 0 auto;
  background-color: #fefae0;
  border: 2px solid #d4b28c;
  border-radius: 8px;
  font-family: Pretendard, sans-serif;
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: calc(16 / 600 * 100%);
`;

const Item = styled.div`
  display: flex;
  gap: calc(12 / 600 * 100%);
  align-items: flex-start;
`;

const Bullet = styled.div`
  font-weight: bold;
  color: #5d4037;
  margin-top: 2px;
`;

const Content = styled.div`
  color: #3e2723;
  line-height: calc(42 / 24);
`;

const Title = styled.h3`
  font-weight: 700;
  margin-bottom: calc(20 / 600 * 100%);
  color: #4e342e;
`;

const TypingFlow: React.FC = () => {
  return (
    <Wrapper className="font-22">
      <Title className="font-32">텍스트 출력 설계 의도</Title>
      <Section>
        <Item>
          <Bullet>1.</Bullet>
          <Content>
            <strong>타이핑 효과:</strong> 텍스트는 한 글자씩 출력되도록 구성되어
            있어 사용자의 집중도를 높이고 시각적 리듬감을 제공합니다.
          </Content>
        </Item>
        <Item>
          <Bullet>2.</Bullet>
          <Content>
            <strong>빠른 내용 출력:</strong> 클릭 시 전체 문장이 한 번에
            출력되도록 하여 빠르게 보고 싶은 사용자와 내용을 온전히 전달하고자
            하는 목적을 함께 반영했습니다.
          </Content>
        </Item>
        <Item>
          <Bullet>3.</Bullet>
          <Content>
            <strong>속도 조절 기능:</strong> 설정 창에서 타이핑 속도를 조절할 수
            있도록 하여 사용자 개인의 읽기 속도에 맞게 UX를 조율할 수 있게
            했습니다.
          </Content>
        </Item>
        <Item>
          <Bullet>4.</Bullet>
          <Content>
            <strong>이전 버튼 · 클릭 유도 · 토글:</strong> 이전 버튼으로 대사를
            되돌아볼 수 있고, 클릭 유도 아이콘으로 다음 진행을 안내하며, 토글
            버튼으로 배경 콘텐츠를 온전히 볼 수 있도록 설계했습니다.
          </Content>
        </Item>
      </Section>
    </Wrapper>
  );
};

export default TypingFlow;
