// img
import img1 from "../assets/img/scenario/img1.jpg";
import img2 from "../assets/img/scenario/img2.png";
import img3 from "../assets/img/scenario/img3.png";
import img4 from "../assets/img/scenario/img4.png";

// components
import HelpUXExample from "../components/Scenario/HelpUXExample";
import ClickGuide from "../components/Scenario/ClickGuide";
import ProgressBarDemo from "../components/Scenario/ProgressBarDemo";
import MobileSpacingDemo from "../components/Scenario/MobileSpacingDemo";
import FinalImpression from "../components/Scenario/FinalImpression";
import BriefingIntro from "../components/Scenario/BriefingIntro";
import ComponentStructureDiagram from "../components/Scenario/ComponentStructureDiagram";
import FlowChunkDemo from "../components/Scenario/FlowChunkDemo";
import TypingFlow from "../components/Scenario/TypingFlow";
import LastPage from "../components/Scenario/Lastpage";

export interface ScenarioItem {
  id: number;
  text: string;
  content?: {
    type: "image" | "component";
    src?: string;
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
    text: "자, 다음은... 이 사람은 뭐지? 시나리오 형식으로 자신을 어필했네?",
    content: {
      type: "image",
      src: img2,
      alt: "시나리오 시작 이미지"
    }
  },
  // 3. 더 브리핑에 대한 나의 장점 소개개
  {
    id: 3,
    text: "프로젝트 더 브리핑. 시나리오 형식의 자기소개서. 간단하게 이해시키려고 쓴 부분인가?",
    content: {
      type: "component",
      component: BriefingIntro
    }
  },
  // 기술 스택설명
  {
    id: 4,
    text: "React, TypeScript, styled-components기반으로 구축되어 있구나.",
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
  // 장점 2번째 설명명
  {
    id: 10,
    text: "그 외의 텍스트 박스 부분과, 컨템츠 부분을 나눠서 작업한 부분 인 것 같아. 재사용성과 유지 보수를 생각해 그렇게 만든 것 같네.",
    content: {
      type: "component", //컴포넌트? 이미지? 미지정.
      component: ComponentStructureDiagram
    }
  },
  {
    id: 11,
    text: "해당 부분들은 만들어 놓고 데이터를 넣어서 관리하도록 만들었네.",
    content: {
      type: "component" //컴포넌트? 이미지? 미지정.
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
    text: "텍스트 창의 타이핑 부분도 집중도와 UI부분을 잘 설명함으로 써 튜토리얼 없이도 익숙하게 또 흐름에 따라서 콘텐츠흐름을 따라갈 수 있게 했네. 프로그레스바나, 클릭 유도등으로 잘 알 수 있는 점도 좋아. 내부 여백들도 생각했어.",
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
      type: "image",
      src: img4,
      alt: "데이터 페이지 이미지"
    }
  },
  {
    id: 15,
    text: "전체적으로 UI/UX에 대한 신경을 많이 썼고 데이터의 연결 성이나 활용도를 보여줄려는 생각을 한 느낌이야. '김민겸'지원자는 기억해 둬야 겠어.",
    content: {
      type: "component",
      component: FinalImpression
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
