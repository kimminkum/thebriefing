import type { StaticImageData } from "next/image";
import img1 from "@assets/img/scenario/img1.jpg";
import img2 from "@assets/img/scenario/img2.png";
import img3 from "@assets/img/scenario/img3.png";
import img4 from "@assets/img/scenario/img4.png";

// components
import HelpUXExample from "../components/Scenario/HelpUXExample";
import ClickGuide from "../components/Scenario/ClickGuide";
import ProgressBarDemo from "../components/Scenario/ProgressBarDemo";
import MobileSpacingDemo from "../components/Scenario/MobileSpacingDemo";
import BriefingIntro from "../components/Scenario/BriefingIntro";
import ComponentStructureDiagram from "../components/Scenario/ComponentStructureDiagram";
import FlowChunkDemo from "../components/Scenario/FlowChunkDemo";
import TypingFlow from "../components/Scenario/TypingFlow";
import LastPage from "../components/Scenario/Lastpage";
import ScenarioFlowDiagram from "../components/Scenario/ScenarioFlowDiagram";
import ScenarioDataSummary from "../components/Scenario/ScenarioDataSummary";
import JsonApiIntro from "../components/Scenario/JsonApiIntro";
import JsonApiSortFilter from "../components/Scenario/JsonApiSortFilter";
import JsonApiDelete from "../components/Scenario/JsonApiDelete";
import PokeApiShowcase from "../components/Scenario/PokeApiShowcase";
import PokeApiDetailInteract from "@components/Scenario/PokeApiDetailInteract";

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
    text: "보는 것도 고생이네 고생이야, 봐도봐도 이력서가 안 줄어드는 느낌이네.",
    content: {
      type: "image",
      src: img1,
      alt: "인트로 이미지"
    }
  },
  // 2. 인적사항 확인
  {
    id: 2,
    text: "자, 다음은... 이 사람은 뭐지? 시나리오 형식으로 자신을 어필했네? 경력은 1년 퍼블리셔로 이커머스 플랫폼에서 일했어. 기본적으로 html, css를 다루는 능력은 있겠네.",
    content: {
      type: "image",
      src: img2,
      alt: "시나리오 시작 이미지"
    }
  },
  // 3. 더 브리핑에 대한 나의 장점 소개개
  {
    id: 3,
    text: "프로젝트 더 브리핑. 시나리오 형식의 자기소개서. ",
    content: {
      type: "component",
      component: BriefingIntro
    }
  },
  // 기술 스택설명
  {
    id: 4,
    text: "도입부에서 말하고자 하는 바는 React, TypeScript, styled-components기반으로 구축되어 있고 개발자로서 데이터로 다룬 점을 강조하고 싶은거네.",
    content: {
      type: "component",
      component: BriefingIntro,
      props: { onlyStack: true }
    }
  },
  // 4. 튜토리얼의 의미와 사람들이 안보더라도 이해할 수 있는 직관력에 대해 설명
  {
    id: 5,
    text: "일단 튜토리얼을 처음에 배치해 둠으로써 이해를 쉽게 만들었네.",
    content: {
      type: "image",
      src: img3,
      alt: "튜토리얼 이미지"
    }
  },
  // UX 설명
  {
    id: 6,
    text: "우측 상단의 설정 버튼을 누르면 설정창과 튜토리얼을 다시 보게 만들었다는데, 버튼의 위치나 X버튼 대신 닫기 버튼으로 한 점 등은 UI/UX를 신경 쓴 느낌이네.",
    content: {
      type: "component",
      component: HelpUXExample
    }
  },
  {
    id: 7,
    text: "튜토리얼의 경우 사람들이 안 볼 경우를 대비해서 우측 하단부의 클릭 유도 버튼도 있네. 직관적인 버튼들을 배치해 둠으로써 이런 점을 고려한 느낌이 들어.",
    content: {
      type: "component",
      component: ClickGuide
    }
  },
  {
    id: 8,
    text: "상단 부에는 프로그레스 바를 두어 진행도를 배치해둔 느낌인데 컬러감이나 디자인 실력은 좀 없는 느낌이야. 디자인은 전달 해주면 되니까.",
    content: {
      type: "component",
      component: ProgressBarDemo
    }
  },
  {
    id: 9,
    text: "기본적인 모바일 최소 여백은 전부 신경 쓴 부분이 있고 폰트 크기도 클램프로 반응형에 맞춰 사용했어.",
    content: {
      type: "component",
      component: MobileSpacingDemo
    }
  },
  // 장점 2번째 설명 부분
  {
    id: 10,
    text: "그 외의 텍스트 박스 부분과, 컨텐츠 부분을 나눠서 작업한 부분 인 것 같아. 재사용성과 유지 보수를 생각해 그렇게 만든 것 같네.",
    content: {
      type: "component", //컴포넌트? 이미지? 미지정.
      component: ComponentStructureDiagram
    }
  },
  {
    id: 11,
    text: "시나리오의 흐름은 텍스트 창과 콘텐츠 칸에 각각 데이터를 설정해 연결하는 방식으로 구성되어 있어. 데이터 하나로 전체 흐름을 제어할 수 있도록 설계했네.",
    content: {
      type: "component", //컴포넌트? 이미지? 미지정.
      component: ScenarioFlowDiagram
    }
  },
  {
    id: 12,
    text: " 상태기반 전환과 애니메이션 전환을 살피니 id값의 변화에만 애니메이션이 적용 되고 있어, 이 부분은 사용자의 집중도를 끌어 올리기 위해 생각한 티가 나. 특히 텍스트가 긴 부분을 나눠서 보여줄 때는 화면 전환을 하지 않아서 흐름이 끊기지 않게 끔 신경을 썼네.",
    content: {
      type: "component",
      component: FlowChunkDemo
    }
  },
  {
    id: 13,
    text: "텍스트 창의 타이핑 효과는 집중도를 높이고, 클릭 시 전체 문장을 한 번에 보여줄 수 있게 해서 빠르게 보고 싶은 사용자도 배려했네. 이런 구성은 튜토리얼 없이도 흐름을 따라가기 쉽게 해주는 좋은 UI 경험이야.",
    content: {
      type: "component",
      component: TypingFlow
    }
  },
  // 데이터 설명.
  {
    id: 14,
    text: "데이터의 경우 ?버튼으로 Datapage를 확인해보니 각종 타입에 잘 대응할 수 있도록 구성했네. 텍스트 부분은 한 라인으로 설명 가능하게 하였고, 컨텐츠 부분의 경우 어떤 타입을 넣어도 되게끔 만든 뒤에 대응하고 있어.",
    content: {
      type: "component",
      component: ScenarioDataSummary
    }
  },
  {
    id: 15,
    text: "JsonPlaceholder Open API를 통해서 API를 다루는 모습을 보여주려는 페이지 인가 보네.",
    content: {
      type: "component",
      component: JsonApiIntro
    }
  },
  {
    id: 16,
    text: "정렬 기능을 보여주는 페이지야.",
    content: {
      type: "component",
      component: JsonApiSortFilter
    }
  },
  {
    id: 17,
    text: "삭제 기능을 보여줄 수 있게 앞선 부분과 나눠서 기능 하나씩 보여주려고 이렇게 만든 것 같네. 집중도가 올라 보기가 좋아.",
    content: {
      type: "component",
      component: JsonApiDelete
    }
  },
  {
    id: 18,
    text: "시각적으로 보여줄 수 있는 부분도 추가한 부분이네. 누구나 알 수 있는 포켓몬 ip를 가져다가 마무리 전에 넣어둔 걸 보니 괜찮네.",
    content: {
      type: "component",
      component: PokeApiShowcase
    }
  },
  {
    id: 19,
    text: "전체적으로 UI/UX에 대한 신경을 많이 썼고 데이터의 연결 성이나 활용도를 보여줄려는 생각을 한 느낌이야. '김민겸'지원자는 기억해 둬야 겠어.",
    content: {
      type: "image",
      src: img4,
      alt: "시나리오 시작 이미지"
    }
  },
  // 마무리
  {
    id: 20,
    text: "여기까지 읽어주셔서 정말 감사합니다.\n기술 스택과 프로젝트 흐름 외에도 궁금한 점이 있으시다면 언제든지 연락 부탁드립니다.",
    content: {
      type: "component",
      component: LastPage
    }
  }
];
