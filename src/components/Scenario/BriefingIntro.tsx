// src/components/BriefingIntro.tsx
import React from "react";
import styled from "styled-components";

interface BriefingIntroProps {
  onlyStack?: boolean;
}

const Container = styled.div`
  padding: calc(30 / 690 * 100%);
  border: 2px solid #aaa;
  background: #fefefe;
`;

const SectionTitle = styled.h3`
  margin-bottom: calc(50 / 654 * 100%);
  font-weight: bold;
`;

const Item = styled.p`
  margin: calc(32 / 589 * 100%) 0;
  display: flex;
  gap: 4px;

  &:before {
    content: "📌 ";
  }
`;

const Highlight = styled.span`
  background-color: #eaffc5;
  padding: 4px 8px;
  font-weight: bold;
  display: inline-block;
`;

const BriefingIntro: React.FC<BriefingIntroProps> = ({ onlyStack }) => {
  return (
    <Container className="font-22">
      <SectionTitle className="font-32">
        📄 프로젝트 소개: 더 브리핑
      </SectionTitle>
      <Item>시나리오 기반의 인터랙티브 자기소개서입니다.</Item>
      <Item>사용자 경험 중심 구성 (튜토리얼 및 UI,UX)을 생각하였습니다.</Item>

      <Item>
        {onlyStack ? (
          <Highlight>
            React + Styled Components + TypeScript + Framer Motion 사용했습니다.
          </Highlight>
        ) : (
          "React + Styled Components + TypeScript + Framer Motion 사용했습니다."
        )}
      </Item>
      <Item>재사용성, 유지보수를 생각해 컴포넌트화하였습니다.</Item>
      <Item>일관성과 UI,UX 가이드를 신경썼습니다.</Item>
      <Item>상태전환 및 애니메이션의 전환 부분도 고려하였습니다.</Item>
      <Item>SPA기반인 리액트의 장점을 보여주고자 하였습니다.</Item>
    </Container>
  );
};

export default BriefingIntro;
