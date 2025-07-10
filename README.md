> 시나리오 기반 인터랙션으로 구성된 React + TypeScript 자기소개 포트폴리오  
> **Next.js 전환과 데이터 UX 중심 설계로 실전 대응 역량을 강조했습니다.**

# THE BRIEFING 📰

인터랙티브 자기소개 포트폴리오

면접관이 **자연스럽게 읽어가는 흐름**을 중심으로 구성한 React + Next.js 포트폴리오입니다.  
텍스트와 콘텐츠의 흐름을 통합한 `scenarioData` 구조를 통해 **상태 제어**, **UX 연출**, **API 데이터 처리** 등  
프론트엔드 인터랙션 구현 역량을 보여주는 데 초점을 맞췄습니다.

## 🔧 기술 스택

| 구분       | 기술 스택                  | 주요 역할                          |
| ---------- | -------------------------- | ---------------------------------- |
| 프레임워크 | `Next.js 15.3`, `React 18` | 정적 배포 · SSR · 라우팅           |
| 언어       | `TypeScript`               | 정적 타입 시스템                   |
| 스타일     | `styled-components`        | 반응형 UI · 디자인 시스템          |
| 애니메이션 | `Framer Motion`, `Swiper`  | 인터랙션 · 슬라이드 전환           |
| 상태 관리  | `Recoil`, `Zustand`        | 시나리오 흐름 · UI 상태 분리       |
| 데이터     | `React Query`, `axios`     | 비동기 로직 · 캐싱 · 뮤테이션 처리 |
| 배포       | `Vercel`                   | 정적 빌드 · CI/CD                  |

---

## 💡 주요 기능 요약

### 1. 시나리오 기반 자기소개

- `scenarioData` 단일 구조로 텍스트 + 이미지 + 컴포넌트 흐름 통합
- 타이핑 애니메이션, 텍스트 청크 분할, 클릭 유도 UI
- 튜토리얼 모달 / 이전·다음 버튼 / 텍스트 토글 등 컨트롤 제공

### 2. UI 설정 패널 (Zustand)

- 타이핑 속도 조절 (2~20)
- 텍스트창 on/off, 튜토리얼 재열기, 데이터 페이지 이동

### 3. 상태 흐름 관리 (Recoil)

- 현재 id / 텍스트 청크 index / 진행도(progress bar) 상태 추적

### 4. 실전형 데이터 페이지 (React Query)

- 게시글 목록 50개 조회 (디바운스 검색 + 정렬 + Skeleton Loader)
- 삭제 기능에 옵티미스틱 업데이트 적용, 디바운스 처리 포함

### 5. 포켓몬 도감 예제 (PokeAPI)

- 타입별 필터링 → 포켓몬 카드 슬라이드 구성
- 능력치 시각화 + Skeleton/Loading 상태 UX 구성

### 6. 반응형 + 접근성 고려

- 모바일 최적화 및 키보드 포커스 흐름 설계
- 애니메이션 전환 및 명확한 텍스트 구조

---

## 💬 기술적 하이라이트

- `scenarioData` 단일 소스 기반 UI 제어 구조
- 텍스트 타이핑 효과 + 클릭 유도 + 이전/다음 이동 컨트롤
- Zustand 기반 UI 설정창, 속도 조절, 튜토리얼 재오픈 기능
- React Query로 서버 통신, 캐시 관리, 낙관적 삭제 처리
- 포켓몬 API 기반 필터링/시각화 → 외부 데이터 통합 UI 구성

---

## 📁 디렉토리 구조

```
src/
├─ components/
│ ├─ Scenario/ # 시나리오용 컴포넌트
│ ├─ Window/ # TextWindow, CenterWindow, HelpWindow 등
│ └─ Common/ # 공통 버튼, 스타일 유틸
├─ data/ # 시나리오 데이터 (scenarioData)
├─ hooks/ # 커스텀 훅 (useDebounce, usePokemon 등)
├─ pages/
│ ├─ index.tsx # 시나리오 메인
│ └─ posts.tsx # 데이터 페이지 (조회/삭제)
├─ stores/ # Zustand - UI 상태
├─ atoms/ # Recoil - 시나리오 상태
└─ styles/ # 전역 스타일, 테마, 유틸 스타일
```

---

## 🔗 배포 & 링크

- 🌐 데모 사이트: [thebriefing.vercel.app](https://thebriefing.vercel.app/)
- 📁 GitHub: [github.com/kimminkum/thebriefing](https://github.com/kimminkum/thebriefing)
- 📝 Notion 이력서: [notion.site/9b41e1408c4e4328940baef77dc503b7](https://thoughtful-kidney-7f2.notion.site/9b41e1408c4e4328940baef77dc503b7)

---

## 📌 프로젝트 목적

본 포트폴리오는 **지원자 김민겸**의  
인터랙션 중심 사고방식, 데이터 흐름 처리 능력, UI/UX 설계 감각을 전달하기 위해 제작되었습니다.  
면접관이 직접 클릭하며 자연스럽게 읽어갈 수 있는 방식으로  
**실전 적용 가능한 프론트엔드 개발 역량**을 보여드리고자 합니다.
