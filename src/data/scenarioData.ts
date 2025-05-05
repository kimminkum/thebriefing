import img1 from "../assets/img/scenario/img1.jpg";
import Resume from "../components/Resume";
import StrengthsAndWeaknesses from "../components/StrengthsAndWeaknesses";
import FlowSummary from "../components/FlowSummary";

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
    text: "이번 지원자는 김민겸 지원자구나. 경력 1년차, 그 외는 아직 중요하지 않지. 어떻게 썼는지 확인해야지.",
    content: {
      type: "component",
      component: Resume
    }
  },
  // 3. 전체 흐름 안내
  {
    id: 3,
    text: "아. 장단점, 지원동기, 프론트엔드 기술자 보유기술 하고 자신만의 강점. 읽고, 프로젝트 한 두개 봐야지. 너무 길면 안돼지만, 같이 일 할 사람 뽑는건데 길어도 꼼꼼히 봐야지.",
    content: {
      type: "component",
      component: FlowSummary
    }
  },
  // 3. 전체 흐름 안내
  {
    id: 4,
    text: "아무리 그래도 프로젝트 부터 봐야지 어떤 점을 신경 쓰고 만들었는지 딱 보고 괜찮아야 다른 게 눈에 들어오지.",
    content: {
      type: "component",
      component: FlowSummary
    }
  },
  {
    id: 5,
    text: "프로젝트 더 브리핑. 시나리오 형식의 자기소개서군.",
    content: {
      type: "component",
      component: FlowSummary
    }
  },
  {
    id: 6,
    text: "일단 튜토리얼을 처음에 배치해 둠으로써 이해를 쉽게 만들었고 그 외의 진행을 유도하는 방식이나 UI도 직관적이면서 모바일 가이드에 충실히 따랐어. 데이터 페이지로 보니 각종 타입에 잘 대응 할 수 있도록 만들었네 SPA기반의 리액트에 맞게 잘 하였고 데이터로 관리하는 방식도 좋아 그런데, 데이터를 받아서는 활용이 가능한가?. 상태기반 전환과 애니메이션 전환을 살피니 id값의 변화에만 애니메이션이 적용되게 하여 집중도를 끌어올릴려고했어. ",
    content: {
      type: "component",
      component: FlowSummary
    }
  },
  // 4. 장단점
  {
    id: 80,
    text: "긴 내용으로 썼는데 결론은",
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
