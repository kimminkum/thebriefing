import React from "react"; // JSX 사용을 위해 추가
import Resume from "../components/Resume";

interface ContentItem {
  id: number;
  type: "image" | "component";
  src?: string;
  alt?: string;
  component?: React.ElementType; // ✅ React.FC<any> 대신 ElementType 사용
  props?: Record<string, any>;
}

export const contentData: ContentItem[] = [
  {
    id: 1,
    type: "component",
    component: Resume
  },
  {
    id: 2,
    type: "image",
    src: "image1.jpg",
    alt: "첫 번째 이미지"
  }
  // {
  //   id: 3,
  //   type: "component",
  //   component: Btn,
  //   props: { children: "Click Me!", onClick: () => alert("버튼 클릭됨") },
  // },
  // {
  //   id: 4,
  //   type: "component",
  //   component: SwiperComponent,
  //   props: {
  //     slides: [
  //       { src: "", alt: "슬라이드1" },
  //       { src: "", alt: "슬라이드2" },
  //     ],
  //   },
  // },
  // {
  //   id: 5,
  //   type: "component",
  //   component: Accordion,
  //   props: {
  //     title: "자세한 정보",
  //     children: <p>이것은 아코디언 내용입니다.</p>, // ✅ JSX 사용 가능
  //     isOpen: false,
  //   },
  // },
];
