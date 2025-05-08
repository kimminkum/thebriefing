// src/components/StrengthsAndWeaknesses.tsx
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
  padding: calc(30 / 750 * 100%) calc(40 / 750 * 100%);
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
  margin-bottom: calc(15 / 750 * 100%);
  &:before {
    content: "📌 ";
  }
`;

const SkillList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  padding: 0;
  gap: 12px;
  margin-top: 20px;
`;

const SkillItem = styled.li`
  background: #f0f0f0;
  border: 1px solid #ccc;
  padding: 6px 12px;
  margin-bottom: 12px;
  border-radius: 8px;
  color: #333;
`;

const BlurredSection = styled.div`
  filter: blur(3px);
  opacity: 1;
  min-height: 20vh;
`;

const Highlight = styled.div`
  margin: calc(20 / 750 * 100%) 0;
  font-weight: 500;
  color: #111;
  height: 100%;
`;

interface Props {
  section?: "summary" | "strengths" | "skills" | "motive" | "experience";
}

const StrengthsAndWeaknesses: React.FC<Props> = ({ section }) => {
  return (
    <Container>
      {section === "summary" && (
        <>
          <Item className="font-24">장단점 요약</Item>
          <Highlight className="font-20">
            저의 가장 큰 장점은 문제 해결을 위한 집중력과 실행력입니다. 개발 중
            예기치 않은 UI/UX 오류나 호환성 이슈가 발생했을 때, 원인을 빠르게
            파악하고 문서화하며, 재발 방지를 위한 리팩토링까지 진행하는 습관이
            있습니다. 실제로 LF몰 퍼블리싱 업무 중 아이폰 일부 기기에서 CSS가
            깨지는 이슈를 분석하고, Nesting 구조의 렌더링 문제임을 파악해 코드
            구조를 개선한 경험이 있습니다. 프론트엔드 개발에서도 이처럼 구조적
            분석 능력과 꼼꼼한 테스트는 큰 강점이 됩니다. 반면, 처음 마주하는
            프레임워크나 기술에 대해 신중하게 접근하다 보니 도입 속도가 다소
            느릴 수 있습니다.
            <br />
            하지만 이를 보완하기 위해 개인 프로젝트에서 React와 TypeScript를
            도입하고, 스타일 컴포넌트, 애니메이션 라이브러리 등 다양한 기술을
            실험하며 빠르게 습득하는 훈련을 반복하고 있습니다. 신중함을 바탕으로
            한 빠른 학습과 적용이 저의 성장 방향입니다.
          </Highlight>
          <BlurredSection className="font-20">
            저의 가장 큰 장점은 문제 해결을 위한 집중력과 실행력입니다. 개발 중
            예기치 않은 UI/UX 오류나 호환성 이슈가 발생했을 때, 원인을 빠르게
            파악하고 문서화하며, 재발 방지를 위한 리팩토링까지 진행하는 습관이
            있습니다. 실제로 LF몰 퍼블리싱 업무 중 아이폰 일부 기기에서 CSS가
            깨지는 이슈를 분석하고, Nesting 구조의 렌더링 문제임을 파악해 코드
            구조를 개선한 경험이 있습니다. 프론트엔드 개발에서도 이처럼 구조적
            분석 능력과 꼼꼼한 테스트는 큰 강점이 됩니다. 반면, 처음 마주하는
            프레임워크나 기술에 대해 신중하게 접근하다 보니 도입 속도가 다소
            느릴 수 있습니다.
          </BlurredSection>
        </>
      )}

      {section === "motive" && (
        <>
          <Item className="font-24">지원동기</Item>
          <Highlight className="font-20">
            저는 단순히 동작하는 화면을 만드는 것이 아니라, 사용자 경험을 고려한
            구조적인 프론트엔드 개발에 깊은 흥미를 느낍니다. 디자인을 그대로
            옮기는 데 그치지 않고, 화면이 왜 이렇게 구성되어야 하는지, 어떤
            방식이 더 사용자 친화적인지를 고민하게 되었습니다. 이런 관점은
            자연스럽게 컴포넌트 기반 개발과 UI 상태 관리, 코드 재사용성에 대한
            관심으로 이어졌습니다.
            <br />
            특히, 모바일 중심의 반응형 구현과 예외 케이스 대응 경험은 프론트엔드
            개발로의 재미를 붙였고, 이를 체계화하기 위해 React, TypeScript,
            styled-components를 기반으로 한 포트폴리오를 직접 설계했습니다. 이
            과정에서 복잡한 상태 전환과 사용자 흐름을 직접 시나리오로 기획하며
            UI를 구현해보는 것이 매우 매력적이었습니다.
            <br />
            앞으로는 단순 구현을 넘어서 사용자 경험과 유지보수성까지 고려한
            프론트엔드 엔지니어로 성장하고 싶습니다.
          </Highlight>
          <BlurredSection className="font-20">
            저의 가장 큰 장점은 문제 해결을 위한 집중력과 실행력입니다. 개발 중
            예기치 않은 UI/UX 오류나 호환성 이슈가 발생했을 때, 원인을 빠르게
            파악하고 문서화하며, 재발 방지를 위한 리팩토링까지 진행하는 습관이
            있습니다. 실제로 LF몰 퍼블리싱 업무 중 아이폰 일부 기기에서 CSS가
            깨지는 이슈를 분석하고, Nesting 구조의 렌더링 문제임을 파악해 코드
            구조를 개선한 경험이 있습니다. 프론트엔드 개발에서도 이처럼 구조적
            분석 능력과 꼼꼼한 테스트는 큰 강점이 됩니다. 반면, 처음 마주하는
            프레임워크나 기술에 대해 신중하게 접근하다 보니 도입 속도가 다소
            느릴 수 있습니다.
          </BlurredSection>
        </>
      )}

      {section === "strengths" && (
        <>
          <Item className="font-24">자신만의 강점</Item>
          <Highlight className="font-20">
            저의 가장 큰 강점은 UI/UX 품질에 대한 집요함과 문제 해결력입니다.
            단순히 마크업을 넘어서 사용자가 ‘어떻게 느끼는가’에 집중하고, 예상치
            못한 오류나 불편 요소를 발견하면 빠르게 분석하여 구조적으로
            개선합니다. 실제로 LF몰에서 특정 아이폰 기기에서 스타일이 깨지는
            현상이 발생했을 때, 단순 대응이 아닌 CSS nesting 구조의 렌더링
            문제로 원인을 규명하고 전체 구조를 리팩토링한 경험이 있습니다.
            <br />
            또한 저는 흐름을 이해하고 구조를 잡는 능력이 강합니다.
            포트폴리오에서도 하나의 단일 흐름으로 사용자에게 ‘정보를 어떻게
            이해시키는가’를 설계하고, 이를 TextWindow와 CenterWindow, HelpWindow
            등 역할별로 나눈 컴포넌트로 재사용할 수 있도록 구성했습니다. 이처럼
            작은 디테일도 사용자 입장에서 끊김 없이 설계하려는 감각은 차별적인
            강점이 될 수 있다고 생각합니다.
          </Highlight>
          <BlurredSection className="font-20">
            저의 가장 큰 장점은 문제 해결을 위한 집중력과 실행력입니다. 개발 중
            예기치 않은 UI/UX 오류나 호환성 이슈가 발생했을 때, 원인을 빠르게
            파악하고 문서화하며, 재발 방지를 위한 리팩토링까지 진행하는 습관이
            있습니다. 실제로 LF몰 퍼블리싱 업무 중 아이폰 일부 기기에서 CSS가
            깨지는 이슈를 분석하고, Nesting 구조의 렌더링 문제임을 파악해 코드
            구조를 개선한 경험이 있습니다. 프론트엔드 개발에서도 이처럼 구조적
            분석 능력과 꼼꼼한 테스트는 큰 강점이 됩니다. 반면, 처음 마주하는
            프레임워크나 기술에 대해 신중하게 접근하다 보니 도입 속도가 다소
            느릴 수 있습니다.
          </BlurredSection>
        </>
      )}

      {section === "skills" && (
        <>
          <Item className="font-24">보유 기술</Item>
          <SkillList className="font-20">
            <SkillItem>React</SkillItem>
            <SkillItem>TypeScript</SkillItem>
            <SkillItem>Styled-components</SkillItem>
            <SkillItem>Framer Motion</SkillItem>
            <SkillItem>Axios</SkillItem>
            <SkillItem>SCSS / LESS</SkillItem>
            <SkillItem>Git & GitHub</SkillItem>
            <SkillItem>React Router</SkillItem>
            <SkillItem>Figma 협업</SkillItem>
          </SkillList>
          <BlurredSection className="font-20">
            저의 가장 큰 장점은 문제 해결을 위한 집중력과 실행력입니다. 개발 중
            예기치 않은 UI/UX 오류나 호환성 이슈가 발생했을 때, 원인을 빠르게
            파악하고 문서화하며, 재발 방지를 위한 리팩토링까지 진행하는 습관이
            있습니다. 실제로 LF몰 퍼블리싱 업무 중 아이폰 일부 기기에서 CSS가
            깨지는 이슈를 분석하고, Nesting 구조의 렌더링 문제임을 파악해 코드
            구조를 개선한 경험이 있습니다. 프론트엔드 개발에서도 이처럼 구조적
            분석 능력과 꼼꼼한 테스트는 큰 강점이 됩니다. 반면, 처음 마주하는
            프레임워크나 기술에 대해 신중하게 접근하다 보니 도입 속도가 다소
            느릴 수 있습니다.
          </BlurredSection>
        </>
      )}

      {section === "experience" && (
        <>
          <Item className="font-24">경험</Item>
          <Highlight className="font-20">
            웹 프로젝트를 진행하며 다양한 이슈 상황에 대응해온 경험이 있습니다.
            예기치 않은 브라우저별 스타일 깨짐, 모바일 환경에서의 UI 밀림 현상,
            복잡한 반응형 요구사항 등을 마주했을 때 단순히 문제를 우회하지 않고
            원인을 구조적으로 파악하고 해결하는 접근을 해왔습니다. 예를 들어,
            특정 iOS 기기에서 CSS가 비정상적으로 적용되는 이슈에 대해 렌더링
            구조를 분석하고, 중첩된 스타일 계층 문제임을 파악해 구조를
            정리함으로써 문제를 해결했습니다.
            <br />
            또한 실제 사용자 경험을 염두에 둔 UI 흐름과 예외처리 설계에
            익숙하며, 이를 위해 모바일 UX 가이드라인을 기준으로 반응형 설계 및
            인터랙션 구현을 경험했습니다. 프로젝트를 진행하며 컴포넌트화된
            구조를 바탕으로 재사용성과 유지보수성을 높이는 방법에 집중했고,
            사용자 클릭 흐름, 상태 기반 전환 애니메이션, 데이터 타입에 따른
            콘텐츠 분기 등 현실적인 UI 구성 시나리오를 직접 설계하고
            구현했습니다.
            <br />
            이러한 경험들은 실무 기반의 감각을 바탕으로 더 나은 UI를 설계하는 데
            도움이 되었고, 앞으로도 기술을 넘어서 사용자의 관점에서 코드를
            작성하고자 합니다.
          </Highlight>
          <BlurredSection className="font-20">
            저의 가장 큰 장점은 문제 해결을 위한 집중력과 실행력입니다. 개발 중
            예기치 않은 UI/UX 오류나 호환성 이슈가 발생했을 때, 원인을 빠르게
            파악하고 문서화하며, 재발 방지를 위한 리팩토링까지 진행하는 습관이
            있습니다. 실제로 LF몰 퍼블리싱 업무 중 아이폰 일부 기기에서 CSS가
            깨지는 이슈를 분석하고, Nesting 구조의 렌더링 문제임을 파악해 코드
            구조를 개선한 경험이 있습니다. 프론트엔드 개발에서도 이처럼 구조적
            분석 능력과 꼼꼼한 테스트는 큰 강점이 됩니다. 반면, 처음 마주하는
            프레임워크나 기술에 대해 신중하게 접근하다 보니 도입 속도가 다소
            느릴 수 있습니다.
          </BlurredSection>
        </>
      )}
    </Container>
  );
};

export default StrengthsAndWeaknesses;
