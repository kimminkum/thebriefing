// src/components/StrengthsAndWeaknesses.tsx
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
  padding: 2rem calc(40 / 750 * 100%);
  background: #fff;
  border: 2px solid #ccc;
  min-height: 90%;
  min-height: 85%;
  height: auto;
  max-height: 90vh;
  overflow: hidden;

  @media (min-width: 500px) {
    min-width: 80%;
  }
`;

const Item = styled.div`
  margin-bottom: 0.75rem;
  &:before {
    content: "📌 ";
  }
`;

const BlurredSection = styled.div`
  filter: blur(3px);
  opacity: 1;
  min-height: 20vh;
`;

const Highlight = styled.div`
  margin: 1rem 0;
  font-weight: bold;
  color: #111;
  height: 100%;
`;

const StrengthsAndWeaknesses: React.FC = () => {
  return (
    <Container>
      <Item>장단점 요약</Item>
      <Highlight className="font-20">
        저의 가장 큰 장점은 문제 해결을 위한 집중력과 실행력입니다. 개발 중
        예기치 않은 UI/UX 오류나 호환성 이슈가 발생했을 때, 원인을 빠르게
        파악하고 문서화하며, 재발 방지를 위한 리팩토링까지 진행하는 습관이
        있습니다. 실제로 LF몰 퍼블리싱 업무 중 아이폰 일부 기기에서 CSS가 깨지는
        이슈를 분석하고, Nesting 구조의 렌더링 문제임을 파악해 코드 구조를
        개선한 경험이 있습니다. 프론트엔드 개발에서도 이처럼 구조적 분석 능력과
        꼼꼼한 테스트는 큰 강점이 됩니다. 반면, 처음 마주하는 프레임워크나
        기술에 대해 신중하게 접근하다 보니 도입 속도가 다소 느릴 수 있습니다.
        <br />
        하지만 이를 보완하기 위해 개인 프로젝트에서 React와 TypeScript를
        도입하고, 스타일 컴포넌트, 애니메이션 라이브러리 등 다양한 기술을
        실험하며 빠르게 습득하는 훈련을 반복하고 있습니다. 신중함을 바탕으로 한
        빠른 학습과 적용이 저의 성장 방향입니다.
      </Highlight>

      <BlurredSection>
        <Item>지원동기</Item>
        <Highlight className="font-20">
          저의 가장 큰 장점은 문제 해결을 위한 집중력과 실행력입니다. 개발 중
          예기치 않은 UI/UX 오류나 호환성 이슈가 발생했을 때, 원인을 빠르게
          파악하고 문서화하며, 재발 방지를 위한 리팩토링까지 진행하는 습관이
          있습니다. 실제로 LF몰 퍼블리싱 업무 중 아이폰 일부 기기에서 CSS가
          깨지는 이슈를 분석하고, Nesting 구조의 렌더링 문제임을 파악해 코드
          구조를 개선한 경험이 있습니다.
          <br /> 프론트엔드 개발에서도 이처럼 구조적 분석 능력과 꼼꼼한 테스트는
          큰 강점이 됩니다. 반면, 처음 마주하는 프레임워크나 기술에 대해
          신중하게 접근하다 보니 도입 속도가 다소 느릴 수 있습니다. 하지만 이를
          보완하기 위해 개인 프로젝트에서 React와 TypeScript를 도입하고, 스타일
          컴포넌트, 애니메이션 라이브러리 등 다양한 기술을 실험하며 빠르게
          습득하는 훈련을 반복하고 있습니다. 신중함을 바탕으로 한 빠른 학습과
          적용이 저의 성장 방향입니다.
        </Highlight>

        <Item>자신만의 강점</Item>
        <Highlight className="font-20">
          저는 ‘UI/UX 설계 감각’과 ‘퍼포먼스 최적화 경험’을 함께 갖춘 프론트엔드
          개발자입니다. 퍼블리셔로 일하면서 체득한 레이아웃 구조와 디자인 해석
          능력은 사용자 중심 UI를 구현하는 데 강점으로 작용합니다. 또한 실제
          쇼핑몰 페이지를 하드코딩으로 제작하며 쌓은 디바이스/브라우저 대응
          경험은 실전에서 유용한 강점입니다. 프론트엔드 개발자로 전환한 이후에는
          React, Zustand, styled-components 등 컴포넌트 중심 개발로의 확장을
          시도했고, 단순 재현이 아닌 동적 흐름을 고려한 상태 설계와 모션 구현에
          집중했습니다.
          <br />
          특히 ‘시나리오 기반 포트폴리오’를 기획·제작하면서, 단순 자기소개를
          넘어서 사용자가 몰입할 수 있는 인터랙션 구조를 스스로 설계했습니다.
          텍스트 출력 제한, 클릭 전환 제어, 튜토리얼 구조, 재사용 가능한
          컴포넌트 구성 등 실용성과 창의성을 겸비한 프로젝트는 저만의 강점이라
          자부할 수 있습니다.
        </Highlight>
      </BlurredSection>
    </Container>
  );
};

export default StrengthsAndWeaknesses;
