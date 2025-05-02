import Resume from "../components/Resume";

export interface ScenarioItem {
  id: number;
  text: string;
  content?: {
    type: "image" | "component";
    src?: string;
    alt?: string;
    component?: React.FC<any>;
    props?: any;
  };
}

export const scenarioData: ScenarioItem[] = [
  {
    id: 1,
    text: "보는 것도 고생이네 고생이야, 봐도봐도 이력서가 안 줄어드는 느낌이네.dddddddddddddddddddddddddddddddddddd",
    content: {
      type: "image",
      src: "/images/intro.png", //서류더미 이미지지
      alt: "인트로 이미지"
    }
  },
  {
    id: 2,
    text: "이번 지원자는 김민겸 지원자구나, 어디 볼까?",
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
      alt: "튜토리얼"
    }
  }
];
