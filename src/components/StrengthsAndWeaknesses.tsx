// src/components/StrengthsAndWeaknesses.tsx
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
  padding: calc(30 / 690 * 100%) calc(40 / 690 * 100%);
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
  margin-bottom: calc(15 / 690 * 100%);
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
  margin: calc(20 / 690 * 100%) 0;
  font-weight: 500;
  color: #111;
  height: 100%;
`;

const Stress = styled.span`
  font-weight: 600;
  color: #d94f45;
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
            저의 가장 큰 장점은{" "}
            <Stress>구조적인 사고와 사용자 흐름에 대한 감각입니다. </Stress>
            화면을 구성할 때 단순히 시각적 구현에 그치지 않고, 사용자가 어떤
            상황에서 어떻게 반응할지를 고려한 구조 설계를 먼저 고민합니다. 실제
            포트폴리오에서는 <Stress>시나리오 기반의 인터페이스 흐름</Stress>을
            구현하면서 텍스트 출력, 클릭 유도, 콘텐츠 전환, 진행 상태 표시 등을
            컴포넌트 단위로 설계하여 유지보수성과 확장성을 높였습니다. 각 요소는
            역할별로 나눠 설계하였고, 사용자 클릭 타이밍에 따라 자연스럽게 다음
            콘텐츠로 넘어가도록 구현했습니다.
            <br />
            한편, 새로운 기술을 적용할 때는 어느 정도 숙지한 뒤에 시도하려는
            신중한 성향이 있어, 기술 도입이 빠른 편은 아닙니다. 하지만 이러한
            태도 덕분에 프로젝트 진행 중에 발생하는 오류나 예외에 대해 비교적
            안정적으로 대응할 수 있었고, 특히 예상치 못한 흐름에서도
            <Stress>시스템이 무너지지 않도록 구조를 설계하는 데 </Stress>
            집중하는 스타일입니다. React, TypeScript, styled-components 등의
            핵심 기술은 실제 프로젝트를 통해 익혔고, 코드 리뷰와 리팩토링을
            반복하면서 완성도를 높여가는 방식으로 단점을 보완하고 있습니다. 저는
            성급히 기능을 완성하기보다는, 구조적으로 일관된 코드를 통해 결과물의
            완성도를 높이는 것을 더 중요하게 여깁니다.
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
            저는 단순히 동작하는 화면을 만드는 것이 아니라,{" "}
            <Stress>
              사용자 경험을 고려한 구조적인 프론트엔드 개발에 깊은 흥미를
              느낍니다.&nbsp;
            </Stress>{" "}
            디자인을 그대로 옮기는 데 그치지 않고, 화면이 왜 이렇게 구성되어야
            하는지, 어떤 방식이 더 사용자 친화적인지를 고민하게 되었습니다. 이런
            관점은 자연스럽게{" "}
            <Stress>
              컴포넌트 기반 개발과 UI 상태 관리, 코드 재사용성에 대한 관심으로
              이어졌습니다.{" "}
            </Stress>
            <br />
            특히, 모바일 중심의 반응형 구현과 예외 케이스 대응 경험은 프론트엔드
            개발로의 재미를 붙였고, 이를 체계화하기 위해 React, TypeScript,
            styled-components를 기반으로 한 포트폴리오를 직접 설계했습니다. 이
            과정에서{" "}
            <Stress>
              복잡한 상태 전환과 사용자 흐름을 직접 시나리오로 기획하며 UI를
            </Stress>{" "}
            구현해보는 것이 매우 매력적이었습니다.
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
            저의 가장 큰 강점은{" "}
            <Stress>UI/UX 품질에 대한 집요함과 문제 해결력입니다.</Stress>{" "}
            단순히 마크업을 넘어서 사용자가 ‘어떻게 느끼는가’에 집중하고,{" "}
            <Stress>
              예상치 못한 오류나 불편 요소를 발견하면 빠르게 분석하여 구조적으로
              개선 합니다.&nbsp;
            </Stress>
            실제로 LF몰에서 특정 아이폰 기기에서 스타일이 깨지는 현상이 발생했을
            때, 단순 대응이 아닌 CSS nesting 구조의 렌더링 문제로 원인을
            규명하고 전체 구조를 리팩토링한 경험이 있습니다.
            <br />
            또한 저는{" "}
            <Stress>흐름을 이해하고 구조를 잡는 능력이 강합니다.</Stress>{" "}
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
            <SkillItem>JQuery</SkillItem>
            <SkillItem>SCSS / LESS</SkillItem>
            <SkillItem>Git & GitHub</SkillItem>
            <SkillItem>React Router</SkillItem>
            <SkillItem>Figma 협업</SkillItem>
            <SkillItem>My SQL</SkillItem>
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
          <Item className="font-24">업무 능력 및 위기대처 능력</Item>
          <Highlight className="font-20">
            저는 프론트엔드 개발자로서 사용자의 흐름과 실제 환경을 고려한 UI
            구현을 중요하게 생각합니다. 단순히 보이는 화면을 만드는 것이 아니라,
            사용자가 어떤 상황에서 어떤 행동을 할지 예측하고, 그에 맞는{" "}
            <Stress>상태 전환과 피드백을 제공하는 것을 목표로 합니다.</Stress>
            <br /> 특히 인터랙션이 중요한 프로젝트에서는 텍스트 타이핑, 클릭
            유도, 콘텐츠 전환, 진행 상태 표시 등 다양한 요소를 상태 기반으로
            정교하게 제어하였습니다. 이러한 흐름을 구현하며 사용자 경험을 해치지
            않도록 설계하는 데 집중해 왔습니다.
            <br />
            <br /> 업무 중 예기치 못한 문제에 직면했을 때에도 구조적인 해결을
            추구합니다. 예를 들어, 특정 iOS 환경에서 스타일이 제대로 적용되지
            않아 콘텐츠가 깨지는 현상이 발생한 적이 있습니다. 단순한 스타일
            수정으로는 해결되지 않아, 문제를 분석한 결과 CSS nesting 구조의 해석
            차이에서 비롯된 오류임을 확인했고, 이를 평면화하여 문제를
            해결했습니다.
            <br /> 이후 동일한 문제가 반복되지 않도록{" "}
            <Stress>
              내부 가이드화하여 팀과 공유한 경험도 있습니다.&nbsp;
            </Stress>{" "}
            문제 해결에 그치지 않고,{" "}
            <Stress>
              재발 방지를 위한 문서화와 코드 개선까지 연결하는 과정은 제 업무
              스타일의 특징입니다.&nbsp;
            </Stress>
            이러한 경험을 바탕으로 사용자 중심의 인터페이스를 안정적으로
            구현하고, 예외 상황에도 유연하게 대응할 수 있는 프론트엔드 개발자로
            성장하고자 합니다.
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
