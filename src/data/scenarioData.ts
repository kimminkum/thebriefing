import img1 from "../assets/img/scenario/img1.jpg";
import Resume from "../components/Resume";

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
  {
    id: 1,
    text: "보는 것도 고생이네 고생이야, 봐도봐도 이력서가 안 줄어드는 느낌이네.",
    content: {
      type: "image",
      src: img1,
      alt: "인트로 이미지"
    }
  },
  {
    id: 2,
    text: "이번 지원자는 김민겸 지원자구나. 어디 이력서를 한 번 볼까? 어떤 경험을 했는지 궁금하네.",
    content: {
      type: "component",
      component: Resume
    }
  },
  {
    id: 3,
    text: "타이핑 속도나 튜토리얼도 직접 조절 가능합니다.",
    content: {
      type: "image",
      src: "/images/tutorial.png",
      alt: "튜토리얼 이미지"
    }
  }
];
