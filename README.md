> React + TypeScript 기반의 인터랙티브 자기소개 포트폴리오  
> 기존 Vite 기반 프로젝트를 Next.js(15.x)로 구조 전환하여 배포 최적화

# The Briefing

React + TypeScript 기반의 인터랙티브 자기소개 포트폴리오

다양한 최신 React 생태계 기술을 접목하여, 시나리오 형태의 텍스트+콘텐츠 흐름과 데이터 페이지를 제공하는 Next.js 애플리케이션입니다.

## 기술 스택

- **Next.js 15.3**
- **TypeScript**
- **Styled-Components**
- **Framer Motion**
- **Recoil** (시나리오 진행 상태 관리)
- **Zustand** (UI 상태 관리: 튜토리얼 모달, 텍스트 윈도우 토글, 클릭 잠금, 타이핑 속도 등)
- **React Query** (@tanstack/react-query)
  - API 데이터 페칭 / 캐싱 / 로딩·에러 처리 / 옵티미스틱 업데이트
- **axios** (HTTP 클라이언트)
- **Swiper** (슬라이더)
- **Vercel** 정적 배포 최적화

## 주요 기능

1. **시나리오 기반 자기소개**

   - `scenarioData` 단일 데이터로 텍스트+이미지+컴포넌트 흐름 제어
   - 타이핑 애니메이션, 문장 단위 청크 분할, 이전/다음 이동
   - 튜토리얼 모달 & 클릭 유도 UI

2. **UI 설정 패널 (Zustand)**

   - 튜토리얼 재열기, 데이터 페이지 이동, 텍스트 윈도우 토글
   - 타이핑 속도 조절 (range: 2–20, 기본 10)

3. **시나리오 진행 상태 관리 (Recoil)**

   - 현재 시나리오 ID, 텍스트 청크 인덱스, 진행도(ProgressBar)

4. **데이터 보기 페이지 (React Query)**

   - **조회(Intro)**:
     - 게시글 목록 50개 요청 → 화면에 10개씩 표시
     - 검색(제목 디바운스), 정렬(ID/제목↑↓)
     - Skeleton Loader, debounce 훅 적용
   - **삭제(Delete)**:
     - 게시글 삭제 뮤테이션 → 옵티미스틱 업데이트로 즉시 UI 반영
     - 클릭 디바운스 처리

5. **포켓몬 도감 예제 (React Query + Swiper)**

   - **PokeAPI**에서 타입 목록 및 포켓몬 상세 조회
   - 슬라이드 카드로 이미지·스탯 시각화
   - 로딩 상태 스피너/Skeleton 등 UX 보강

6. **반응형 & 접근성**
   - 전반적 UI/UX 고려 (버튼, 포커스, 애니메이션 등)
   - 모바일 및 데스크탑 대응

## 디렉토리 구조

src/
├─ components/
│ ├─ Scenario/ # 시나리오용 컴포넌트
│ ├─ Window/ # 텍스트·설정·중앙영역 윈도우
│ └─ Common/ # 공통 스타일, Button 등
├─ data/ # 시나리오 데이터
├─ pages/
│ ├─ index.tsx # 메인 시나리오
│ └─ posts.tsx # 데이터 페이지 (조회/삭제 탭)
├─ stores/ # Zustand UI 상태
├─ atoms/ # Recoil 상태
├─ hooks/ # 커스텀 훅 (useDebounce, useDebouncedCallback, usePokemon 등)
└─ styles/ # 전역 스타일, 테마, 유틸 스타일
