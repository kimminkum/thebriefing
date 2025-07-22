import React from 'react';
import type { StaticImageData } from 'next/image';
import img1 from '@assets/img/scenario/img1.jpg';
import img2 from '@assets/img/scenario/img2.png';

// components
import HelpUXExample from '../components/Scenario/HelpUXExample';
import ClickGuide from '../components/Scenario/ClickGuide';
import ProgressBarDemo from '../components/Scenario/ProgressBarDemo';
import BriefingIntro from '../components/Scenario/BriefingIntro';
import ComponentStructureDiagram from '../components/Scenario/ComponentStructureDiagram';
import FlowChunkDemo from '../components/Scenario/FlowChunkDemo';
import TypingFlow from '../components/Scenario/TypingFlow';
import LastPage from '../components/Scenario/Lastpage';
import ScenarioFlowDiagram from '../components/Scenario/ScenarioFlowDiagram';
import PostTable from '../components/Scenario/PostTable';
import PokeApiShowcase from '../components/Scenario/PokeApiShowcase';
import PokeApiDetailInteract from '../components/Scenario/PokeApiDetailInteract';
import OutroTitle from '../components/Scenario/OutroTitle';
import InfiniteScrollPage from '../components/Scenario/InfiniteScrollPage';

export interface ScenarioItem {
  id: number;
  text: string;
  highlights?: string[];
  badges?: string[];
  content?: {
    type: 'image' | 'component';
    src?: StaticImageData;
    alt?: string;
    component?: React.ComponentType;
    props?: Record<string, unknown>;
  };
}

export const scenarioData: ScenarioItem[] = [
  // 1. 이력서 더미 확인 (인트로)
  {
    id: 1,
    text: '보는 것도 고생이네… 봐도 봐도 이력서가 안 줄어드는 느낌이야.',
    content: {
      type: 'image',
      src: img1,
      alt: '인트로 이미지',
    },
  },
  {
    id: 2,
    text: '자, 다음은… 김민겸, 경력 1년 3개월차 지원자.',
    highlights: ['김민겸'],
    badges: ['경력 1년 3개월차'],
    content: {
      type: 'image',
      src: img2,
      alt: '시나리오 시작 이미지',
    },
  },
  // 2. 프로젝트 전반 소개 (기술 스택)
  {
    id: 3,
    text: 'React·TypeScript·styled‑components·Next.js 기반으로 구축했고, 데이터를 다루는 능력을 강조하네.',
    highlights: ['React', 'TypeScript', 'styled‑components', 'Next.js'],
    badges: ['데이터를 다루는 능력'],
    content: {
      type: 'component',
      component: BriefingIntro,
    },
  },
  // 3. 데이터 다루기: 목록 조회 → 삭제
  {
    id: 4,
    text: '전역 상태는 Recoil·Zustand로, API 호출은 React Query로 구현해 캐싱·로딩·정렬·필터까지 모두 지원하는 점을 보여주려고 한 페이지야.',
    highlights: ['Recoil', 'Zustand', 'React Query'],
    badges: ['캐싱', '정렬', '필터'],
    content: {
      type: 'component',
      component: () => <PostTable mode="intro" />,
    },
  },
  {
    id: 5,
    text: '삭제 기능은 낙관적 업데이트와 디바운스로 매끄럽게 처리했어. 실제 서버와 통신하면서도 즉각적인 반응을 주는 구조야.',
    highlights: ['낙관적 업데이트', '디바운스'],
    badges: ['삭제 기능', '비동기 처리'],
    content: {
      type: 'component',
      component: () => <PostTable mode="delete" />,
    },
  },
  {
    id: 6,
    text: '이를 약간 변형한 무한스크롤 기능까지 구현할 수 있는 것 같아.',
    content: {
      type: 'component',
      component: () => {
        return <InfiniteScrollPage />;
      },
    },
  },
  // 4. 데이터 다루기: 포켓몬 API
  {
    id: 7,
    text: '실제 API 데이터를 통해 도감 형식 UI를 구현했어. 포켓몬 속성, 키·몸무게, 능력치를 시각적으로 정리해서 데이터 시각화와 UI 구성 능력을 함께 보여주는 구조야.',
    highlights: ['API 데이터', '도감 형식 UI', '시각적으로 정리'],
    badges: ['데이터 시각화', 'UI 구성 능력'],

    content: {
      type: 'component',
      component: PokeApiShowcase,
    },
  },
  {
    id: 8,
    text: '타입별 필터링과 슬라이드 UI를 통해 데이터를 시각적으로 풀어내며, 능력치 시각화 중심 구성과 인터랙션 연출을 함께 보여주는 역할을 담당하네.',
    highlights: ['데이터', '시각적으로', '인터랙션', '강조'],
    badges: ['외부 API 활용', '능력치 시각화'],
    content: {
      type: 'component',
      component: PokeApiDetailInteract,
    },
  },

  // 5. 시스템 구조 & 흐름
  {
    id: 9,
    text: '이 페이지는 전체 시스템의 흐름을 트리 구조로 시각화한 화면이야. 스크롤을 통해 주요 컴포넌트의 연결 관계를 한눈에 파악할 수 있어. 전체 시나리오 흐름은 하나의 데이터 구조로 통합하고, 텍스트 출력과 콘텐츠 출력을 역할에 따라 분리했지. 이를 바탕으로 컴포넌트 간 의존성을 줄이고, 재사용성과 유지보수를 고려한 구조 설계를 구현했어.',
    highlights: ['트리 구조로 시각화', '데이터 구조', '역할에 따라 분리', '재사용성', '유지보수'],
    badges: ['시나리오 설계', '컴포넌트 구조화', 'UX 최적화'],
    content: {
      type: 'component', //컴포넌트? 이미지? 미지정.
      component: ComponentStructureDiagram,
    },
  },
  {
    id: 10,
    text: '시나리오의 전체 흐름은 scenarioData라는 데이터 구조 하나로 통합해 관리하고 있어. 역할에 따라 분리되어 각각 TextWindow와 CenterWindow에서 처리되도록 설계했고, 하나의 데이터만으로 전 흐름이 자동 연동되도록 구성했지. 이 구조를 시각적으로 정리한 게 바로 이 다이어그램이야.',
    highlights: ['데이터 구조', '역할에 따라 분리', '자동 연동'],
    badges: ['데이터 기반 설계', 'UI 흐름 분리', '유지보수 용이'],
    content: {
      type: 'component',
      component: ScenarioFlowDiagram,
    },
  },
  {
    id: 11,
    text: '이 페이지는 UX 흐름 최적화를 위해 설계되었어. 텍스트는 같은 id 내 전환 없음을 원칙으로 이어 출력되고, id 변화만 애니메이션 전환이 발생해. 게다가 긴 문장은 조각 단위 출력으로 나뉘어 표시돼서, 흐름이 자연스럽고 집중도도 유지되도록 구성했지. 이 진행 방식을 시각적으로 보여준 자료야.',
    highlights: ['같은 id 내 전환 없음', 'id 변화만 애니메이션', '조각 단위 출력'],
    badges: ['UX 흐름 최적화', '타이핑 UX 설계', '상태 기반 전환'],
    content: {
      type: 'component',
      component: FlowChunkDemo,
    },
  },
  {
    id: 12,
    text: '텍스트 출력은 사용자 집중도와 컨트롤을 모두 고려했어. 타이핑 효과로 몰입감을 높이되, 클릭 시 전체 출력이 가능하게 설계해서 유저의 리듬에 맞출 수 있도록 했지. 또한 타이핑 속도 조절과 전환 옵션, 이전 버튼, 토글 기능까지 추가해서 UX 자율성을 높였어.',
    highlights: ['집중도', '컨트롤', 'UX 자율성'],
    badges: ['타이핑 UX 설계', '사용자 중심 제어', '속도 · 전환 옵션'],
    content: {
      type: 'component',
      component: TypingFlow,
    },
  },

  // 6. UI/UX 디테일
  {
    id: 13,
    text: '초반 진입 장벽을 낮추기 위해 튜토리얼과 설정창을 배치했고, 환경에 따른 버튼 위치와 클릭 유도 UI까지 세밀하게 설계했어. 이는 모바일 UX 가이드에 맞춘 시야 흐름, 위치 기준, 인터랙션 전략까지 함께 고려한 결과야.',
    highlights: ['튜토리얼과 설정창', '모바일 UX 가이드', '인터랙션 전략'],
    badges: ['초기 진입 UX', '디바이스별 대응', 'UX 디테일 설계'],
    content: {
      type: 'component',
      component: HelpUXExample,
    },
  },
  {
    id: 14,
    text: '튜토리얼을 보지 않아도 자연스럽게 흐름을 따라갈 수 있도록, 우측 하단에 클릭 유도 버튼을 배치했어. 진행 버튼과 이전 버튼, 콘텐츠 토글 기능까지 갖춘 사용자 배려 UI로 구성했지.',
    highlights: ['자연스러운 흐름', '클릭 유도 버튼', '콘텐츠 토글 기능'],
    badges: ['UI 흐름 설계', '진행 제어 UX', '사용자 배려'],
    content: {
      type: 'component',
      component: ClickGuide,
    },
  },
  {
    id: 15,
    text: '진행도를 표시하는 진행도 안내 UI인 프로그레스 바는 현재 시나리오 위치를 직관적으로 보여주고, 사용자가 흐름의 끝을 예측할 수 있도록 도와줘. 특히 상단 고정형 구조로 안정성을 확보했고, 모바일에서도 반응형 설계에 따라 여백이 자연스럽게 처리되어 UI 신뢰성을 높였어.',
    highlights: ['프로그레스 바', '시나리오 위치', '상단 고정형 구조'],
    badges: ['진행도 안내 UI', 'UX 시각화', '반응형 설계'],
    content: {
      type: 'component',
      component: ProgressBarDemo,
    },
  },

  // 7. 마무리
  {
    id: 16,
    text: "전체적으로 UI/UX에 대한 신경을 많이 썼고 데이터의 연결 성이나 활용도를 보여줄려는 생각을 한 느낌이야. '김민겸'지원자는 기억해 둬야 겠어.",
    content: {
      type: 'component',
      component: OutroTitle,
    },
  },
  // 마무리
  {
    id: 17,
    text: '여기까지 읽어주셔서 정말 감사합니다. 기술 스택과 프로젝트 흐름 외에도 궁금한 점이 있으시다면 언제든지 연락 부탁드립니다.',
    content: {
      type: 'component',
      component: LastPage,
    },
  },
];
