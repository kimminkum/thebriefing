// img
import img1 from "../assets/img/scenario/img1.jpg";
import img2 from "../assets/img/scenario/img2.png";
import img3 from "../assets/img/scenario/img3.png";
import img4 from "../assets/img/scenario/img4.png";

// components
import Resume from "../components/Resume";
import StrengthsAndWeaknesses from "../components/StrengthsAndWeaknesses";
import FlowSummary from "../components/FlowSummary";
import BriefingIntro from "../components/BriefingIntro";
import ComponentStructureDiagram from "../components/ComponentStructureDiagram";
import FlowChunkDemo from "../components/FlowChunkDemo";
import TypingFlow from "../components/TypingFlow";
import LastPage from "../components/Lastpage";

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
      component: TypingFlow
    }
  },
  {
    id: 10,
    text: "데이터의 경우 ?버튼으로 Datapage를 확인해보니 각종 타입에 잘 대응할 수 있도록 구성했네. SPA 기반의 리액트에 맞게 텍스트와 이미지, 컴포넌트 타입을 모두 다루고 있고, 구조도 직관적이야.",
    content: {
      type: "image",
      src: img4,
      alt: "데이터 페이지 이미지"
    }
  },
  // api 사용 추가 [다 지워서 사라졌으니 다시 만들어서 추가하기]
  // 4. 장단점
  {
    id: 11,
    text: "이제 장단점, 지원동기, 보유기술과 자신만의 강점란을 읽어 보자.",
    content: {
      type: "component",
      component: FlowSummary
    }
  },
  {
    id: 12,
    text: "우선 장단점을 보면, 긴 내용으로 썼는데 결론은 문제 원인을 빠르게 파악하고 구조적으로 해결하는 능력이 강점이고, 처음 접하는 기술에는 신중하지만 빠르게 흡수하고 적용하는 편을 어필하고 싶은 거구나.",
    content: {
      type: "component",
      component: StrengthsAndWeaknesses,
      props: { section: "summary" }
    }
  },
  {
    id: 13,
    text: "프론트 엔드 보유 기술은 대체로 프론트엔드 중심으로 구성되어 있네. 기본기부터 실무 적용까지 균형감이 있어 보여.",
    content: {
      type: "component",
      component: StrengthsAndWeaknesses,
      props: { section: "skills" }
    }
  },
  {
    id: 14,
    text: "위기사항 대처 능력으로는 이전 회사에서 특정한 이슈 상황에서의 현상을 발견 및 파악한 경험이 있다는 바탕을 중요시 어필하고 있네.",
    content: {
      type: "component",
      component: StrengthsAndWeaknesses,
      props: { section: "strengths" }
    }
  },
  {
    id: 15,
    text: "지원동기로는 자신의 성장 및 동기 부여를 중요시 생각하고 있고,",
    content: {
      type: "component",
      component: StrengthsAndWeaknesses,
      props: { section: "motive" }
    }
  },
  {
    id: 16,
    text: "경험 적 측면으로서의 자신만의 강점은 UI/UX에 대해 파고드는 느낌을 중요시 생각하고 있다고 설명하고 있네. 김민겸 지원자 좋게 볼 여지가 많았어!",
    content: {
      type: "component",
      component: StrengthsAndWeaknesses,
      props: { section: "experience" }
    }
  },
  {
    id: 17,
    text: "여기까지 읽어주셔서 정말 감사합니다.\n기술 스택과 프로젝트 흐름 외에도 궁금한 점이 있으시다면 언제든지 연락 부탁드립니다.",
    content: {
      type: "component",
      component: LastPage
    }
  }
];
