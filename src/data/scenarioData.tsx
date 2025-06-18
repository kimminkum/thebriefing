import React from "react";
import type { StaticImageData } from "next/image";
import img1 from "@assets/img/scenario/img1.jpg";
import img2 from "@assets/img/scenario/img2.png";
import img4 from "@assets/img/scenario/img4.png";

// components
import HelpUXExample from "../components/Scenario/HelpUXExample";
import ClickGuide from "../components/Scenario/ClickGuide";
import ProgressBarDemo from "../components/Scenario/ProgressBarDemo";
import BriefingIntro from "../components/Scenario/BriefingIntro";
import ComponentStructureDiagram from "../components/Scenario/ComponentStructureDiagram";
import FlowChunkDemo from "../components/Scenario/FlowChunkDemo";
import TypingFlow from "../components/Scenario/TypingFlow";
import LastPage from "../components/Scenario/Lastpage";
import ScenarioFlowDiagram from "../components/Scenario/ScenarioFlowDiagram";
import PostTable from "../components/Scenario/PostTable";
import PokeApiShowcase from "../components/Scenario/PokeApiShowcase";
import PokeApiDetailInteract from "../components/Scenario/PokeApiDetailInteract";

export interface ScenarioItem {
  id: number;
  text: string;
  content?: {
    type: "image" | "component";
    src?: StaticImageData;
    alt?: string;
    component?: React.FC<any>;
    props?: Record<string, any>;
  };
}

export const scenarioData: ScenarioItem[] = [
  // 1. 이력서 더미 확인 (인트로)
  {
    id: 1,
    text: "보는 것도 고생이네… 봐도 봐도 이력서가 안 줄어드는 느낌이야.",
    content: {
      type: "image",
      src: img1,
      alt: "인트로 이미지"
    }
  },
  {
    id: 2,
    text: "자, 다음은… 이 사람은 뭐지? 경력 1년 퍼블리셔, HTML/CSS/JS 다룰 줄 아는군.",
    content: {
      type: "image",
      src: img2,
      alt: "시나리오 시작 이미지"
    }
  },
  // 2. 프로젝트 전반 소개 (기술 스택)
  {
    id: 3,
    text: "React·TypeScript·styled‑components·Next.js 기반으로 구축했고, 데이터를 다루는 능력을 강조하네.",
    content: {
      type: "component",
      component: BriefingIntro
    }
  },
  // 3. 데이터 다루기: 목록 조회 → 삭제
  {
    id: 4,
    text: "전역 상태는 Recoil/Zustand로, API 호출은 React Query로 구현해 캐싱·로딩·정렬·필터까지 모두 지원하는 점을 보여주려고 한 페이지야. 배치 상태는 초반에 중요한 걸 보여줘서 조금이라도 집중 시키려고 한 느낌이네",
    content: {
      type: "component",
      component: () => <PostTable mode="intro" />
    }
  },
  {
    id: 5,
    text: "삭제 기능은 낙관적 업데이트와 디바운스로 매끄럽게 처리했어.",
    content: {
      type: "component",
      component: () => <PostTable mode="delete" />
    }
  },
  // 4. 데이터 다루기: 포켓몬 API
  {
    id: 6,
    text: "시각적으로 보여줄 수 있는 부분도 추가한 부분이네. 유명한 포켓몬 API 데이터를 가져왔어. 도감 형식 구성에서 이미지, 속성, 능력치 등을 시각적으로 잘 정리했어.",
    content: {
      type: "component",
      component: PokeApiShowcase
    }
  },
  {
    id: 7,
    text: "쇼케이스는 외부 데이터를 깔끔하게 연결하는 역할이었다면, 이 컴포넌트는 데이터를 시각적으로 풀어내며 인터랙션 연출과 능력 강조를 동시에 보여주는 역할을 담당하네.",
    content: {
      type: "component",
      component: PokeApiDetailInteract
    }
  },

  // 5. 시스템 구조 & 흐름
  {
    id: 8,
    text: "텍스트와 콘텐츠 영역을 분리하고, 시나리오 전체를 하나의 데이터로 관리해 흐름을 설계했어. 이건 재사용성과 유지보수 관점에서 꽤 전략적이야.",
    content: {
      type: "component", //컴포넌트? 이미지? 미지정.
      component: ComponentStructureDiagram
    }
  },
  {
    id: 9,
    text: "시나리오의 흐름은 텍스트 창과 콘텐츠 칸에 각각 데이터를 설정해 연결하는 방식으로 구성되어 있어. 데이터 하나로 전체 흐름을 제어할 수 있도록 설계했어.",
    content: {
      type: "component", //컴포넌트? 이미지? 미지정.
      component: ScenarioFlowDiagram
    }
  },
  {
    id: 10,
    text: " id 기반 상태 변화만 애니메이션 적용되도록 설계했고, 긴 텍스트는 전환 없이 이어 보여주는 방식으로 사용자 흐름이 끊기지 않게 했네.",
    content: {
      type: "component",
      component: FlowChunkDemo
    }
  },
  {
    id: 11,
    text: "타이핑 효과와 클릭 시 전체 출력 기능까지 고려해서 집중도와 유저 컨트롤을 모두 챙겼어.",
    content: {
      type: "component",
      component: TypingFlow
    }
  },

  // 6. UI/UX 디테일
  {
    id: 12,
    text: "튜토리얼을 배치해 초반 진입 장벽을 낮췄고, 설정 버튼·닫기 버튼·클릭 유도 UI까지 배려한 걸 보니 직관성과 접근성을 고려한 UI 구성인 듯해.",
    content: {
      type: "component",
      component: HelpUXExample
    }
  },
  {
    id: 13,
    text: "튜토리얼의 경우 사람들이 안 볼 경우를 대비해서 우측 하단부의 클릭 유도 버튼도 있네. 직관적인 버튼들을 배치해 둠으로써 이런 점을 고려한 느낌이 들어.",
    content: {
      type: "component",
      component: ClickGuide
    }
  },
  {
    id: 14,
    text: "진행도 표시용 프로그레스 바와 반응형 여백 처리도 포함되어 있어. 다만 기술 중심보단 시각적 UX 배려로 봐야겠네.",
    content: {
      type: "component",
      component: ProgressBarDemo
    }
  },

  // 7. 마무리
  {
    id: 15,
    text: "전체적으로 UI/UX에 대한 신경을 많이 썼고 데이터의 연결 성이나 활용도를 보여줄려는 생각을 한 느낌이야. '김민겸'지원자는 기억해 둬야 겠어.",
    content: {
      type: "image",
      src: img4,
      alt: "끝 인사 이미지"
    }
  },
  // 마무리
  {
    id: 16,
    text: "여기까지 읽어주셔서 정말 감사합니다.\n기술 스택과 프로젝트 흐름 외에도 궁금한 점이 있으시다면 언제든지 연락 부탁드립니다.",
    content: {
      type: "component",
      component: LastPage
    }
  }
];
