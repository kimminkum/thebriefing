// img
import img1 from "../assets/img/scenario/img1.jpg";
import img2 from "../assets/img/scenario/img2.png";
import img3 from "../assets/img/scenario/img3.png";

// components
import Resume from "../components/Resume";
import StrengthsAndWeaknesses from "../components/StrengthsAndWeaknesses";
import FlowSummary from "../components/FlowSummary";
import BriefingIntro from "../components/BriefingIntro";
import ComponentStructureDiagram from "../components/ComponentStructureDiagram";
import FlowChunkDemo from "../components/FlowChunkDemo";

export interface ScenarioItem {
  id: number;
  text: string;
  content?: {
    type: "image" | "component";
    src?: string;
    alt?: string;
    component?: React.FC;
    props?: any;
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
    text: "자, 다음은... 이 사람은 뭐지? 시나리오 형식의 자기소개서?",
    content: {
      type: "image",
      src: img2,
      alt: "시나리오 시작 이미지"
    }
  },
  // 3. 전체 흐름 안내
  {
    id: 3,
    text: "이번 지원자는 김민겸 지원자구나. 경력 1년차, 그 외는 아직 중요하지 않지. 어떻게 썼는지 확인해야지.",
    content: {
      type: "component",
      component: Resume
    }
  },
  // 3. 전체 흐름 안내
  {
    id: 4,
    text: "우선 프로젝트 한 두개 봐야겠지. 어떤 생각을 가지고 작업을 하는지 잘 하는지를 봐야알지. 일단 그래도 프로젝트 부터 봐야지 어떤 점을 신경 쓰고 만들었는지 딱 보고 괜찮아야 다른 게 눈에 들어오지.",
    content: {
      type: "component",
      component: FlowSummary
    }
  },
  {
    id: 5,
    text: "프로젝트 더 브리핑. 시나리오 형식의 자기소개서. 간단하게 이해시키려고 쓴 부분인가?",
    content: {
      type: "component",
      component: BriefingIntro
    }
  },
  {
    id: 6,
    text: "일단 튜토리얼을 처음에 배치해 둠으로써 이해를 쉽게 만들었고 그 외의 진행을 유도하는 방식이나 UI도 직관적이면서 모바일 가이드에 충실히 따랐어.",
    content: {
      type: "image",
      src: img3,
      alt: "튜토리얼 이미지"
    }
  },
  {
    id: 7,
    text: "기본적인 창들을 보니 모듈을 보니 여러개로 나눠서 작업한 부분이 재사용성과, 유지 보수 측면을 생각하고 작업을 한 것 같아.",
    content: {
      type: "component",
      component: ComponentStructureDiagram
    }
  },
  {
    id: 8,
    text: " 상태기반 전환과 애니메이션 전환을 살피니 id값의 변화에만 애니메이션이 적용되게 하여 집중도를 끌어올릴려고했어. 특히 텍스트가 긴 부분을 나눠서 보여줄 때는 화면 전환을 하지 않아서 흐름이 끊기지 않는 부분을 신경썼네.",
    content: {
      type: "component",
      component: FlowChunkDemo
    }
  },
  {
    id: 9,
    text: "텍스트 창의 타이핑 부분도 집중도와 UI부분을 잘 설명함으로 써 튜토리얼 없이도 익숙하게 또 흐름에 따라서 콘텐츠흐름을 따라갈 수 있게 했네. 프로그레스바나, 클릭 유도등으로 잘 알 수 있는 점도 좋아.",
    content: {
      type: "component",
      component: FlowSummary
    }
  },
  {
    id: 10,
    text: "데이터 페이지로 보니 각종 타입에 잘 대응 할 수 있도록 만들었네 SPA기반의 리액트에 맞게 잘 하였고 데이터로 관리하는 방식도 좋아 그런데, 데이터를 받아서는 활용이 가능한가?. ",
    content: {
      type: "component"
    }
  },
  {
    id: 11,
    text: "프로젝트 op.gg 이건 왜 안들어가지는 페이지를 넣어놨어. ",
    content: {
      type: "component"
    }
  },
  {
    id: 12,
    text: "API를 기본적으로 다룰 수 있는 부분이지만, 프록시 서버로 우회해야하는 점 때문에 배포에서 문제를 겪었나 보네. ",
    content: {
      type: "component"
    }
  },
  // 4. 장단점
  {
    id: 80,
    text: "이제 장단점, 지원동기, 보유기술 하고 자신만의 강점. 읽고, 마무리를 지어보자.",
    content: {
      type: "component",
      component: StrengthsAndWeaknesses
    }
  },
  {
    id: 80,
    text: "우선 장단점을 보면, 긴 내용으로 썼는데 결론은",
    content: {
      type: "component",
      component: StrengthsAndWeaknesses
    }
  },
  {
    id: 90,
    text: "문제 원인을 빠르게 파악하고 구조적으로 해결하는 능력이 강점이고, 처음 접하는 기술에는 신중하지만 빠르게 흡수하고 적용하는 편을 어필하고 싶은 거구나.",
    content: {
      type: "component",
      component: StrengthsAndWeaknesses
    }
  },
  {
    id: 90,
    text: "프론트 엔드 보유 기술은",
    content: {
      type: "component",
      component: StrengthsAndWeaknesses
    }
  },
  {
    id: 90,
    text: "차별적인 강점이라고 생각하는 부분이",
    content: {
      type: "component",
      component: StrengthsAndWeaknesses
    }
  },
  {
    id: 90,
    text: "문제 원인을 빠르게 파악하고 구조적으로 해결하는 능력이 강점이고, 처음 접하는 기술에는 신중하지만 빠르게 흡수하고 적용하는 편을 어필하고 싶은 거구나.",
    content: {
      type: "component",
      component: StrengthsAndWeaknesses
    }
  }
];
