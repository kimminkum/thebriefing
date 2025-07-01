// src/components/BriefingIntro.tsx
import React from 'react';
import styled from 'styled-components';
import { Highlight } from '../../styles/Typhography';

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
  margin: calc(20 / 589 * 100%) 0;
  display: flex;
  line-height: calc(26 / 20);
  gap: 4px;

  &:before {
    content: '📌 ';
  }
`;

const BriefingIntro: React.FC = () => {
  return (
    <Container className="font-20">
      <SectionTitle className="font-28">📄 프로젝트 소개: 더 브리핑</SectionTitle>
      <Item>시나리오 기반의 인터랙티브 자기소개서입니다.</Item>
      <Item>
        <p>
          <Highlight>React + Styled Components + TypeScript + Framer Motion</Highlight>
          사용했습니다.
        </p>
      </Item>
      <Item>재사용성, 유지보수를 생각해 컴포넌트화하였습니다.</Item>
      <Item>상태전환 및 애니메이션의 전환 부분도 고려하였습니다.</Item>
      <Item>
        axios로 API 요청을 수행하고, 데이터를 기반으로 도감형 UI 및 리스트 필터링 기능을
        구성했습니다.
      </Item>
      <Item>
        공공 API(PokeAPI, JSONPlaceholder)를 활용해 실시간 데이터를 시각화하고, 필터/정렬/삭제 등의
        인터랙션을 구현했습니다.
      </Item>
      <Item>
        API 응답에 따라 UI 상태를 동적으로 렌더링하며, 비동기 흐름을 사용자 중심으로 조절했습니다.
      </Item>
      <Item>
        <p>
          전역 상태 관리를 위해 <Highlight>Recoil</Highlight>·<Highlight>Zustand</Highlight>
          를, 서버 상태 관리를 위해 <Highlight>React Query</Highlight>를 활용했습니다.
        </p>
      </Item>
    </Container>
  );
};

export default BriefingIntro;
