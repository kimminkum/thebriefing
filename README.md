> React + TypeScript 기반의 인터랙티브 자기소개 포트폴리오  
> Vite 기반 프로젝트를 Next.js 15.x로 구조 전환하여 UX 흐름 최적화 & 정적 배포 최적화를 달성했습니다.

# THE BRIEFING 📰

시나리오 기반 자기소개 포트폴리오

면접관이 자연스럽게 읽어갈 수 있는 흐름을 중심으로 구성한 React + Next.js 포트폴리오입니다.  
텍스트와 콘텐츠의 흐름을 통합한 `scenarioData` 구조를 중심으로 상태 제어, 애니메이션, 데이터 처리까지 아우르는 프론트엔드 인터랙션 설계 능력을 보여주고자 했습니다.

---

## 🔧 기술 스택

| 분류        | 사용 기술                                    |
| ----------- | -------------------------------------------- |
| Framework   | Next.js 15.3, React 18                       |
| Language    | TypeScript                                   |
| Styling     | styled-components                            |
| Animation   | Framer Motion, Swiper                        |
| 상태 관리   | Recoil (시나리오), Zustand (UI 상태)         |
| 데이터 처리 | React Query (`@tanstack/react-query`), axios |
| 배포        | Vercel                                       |

---

## 💡 주요 기능 요약

### 1. 시나리오 기반 자기소개

- `scenarioData` 단일 구조로 텍스트 + 이미지 + 컴포넌트 흐름 제어
- 타이핑 애니메이션 / 텍스트 분할 / 클릭 유도 UI
- 튜토리얼 모달, 이전/다음 버튼, 토글 등 유저 흐름 컨트롤

### 2. UI 설정 패널 (Zustand)

- 타이핑 속도 조절 (2~20)
- 튜토리얼 재열기, 텍스트창 토글, 데이터 페이지 이동

### 3. 시나리오 상태 관리 (Recoil)

- 현재 id, 텍스트 청크 index, 진행도 등 상태 제어

### 4. 데이터 페이지 (React Query)

- 게시글 목록 조회 (검색·정렬·스켈레톤)
- 삭제 시 옵티미스틱 업데이트 및 디바운스 적용

### 5. 포켓몬 도감 예제 (PokeAPI)

- 타입 필터 → 포켓몬 슬라이드 카드
- 능력치 시각화, 스켈레톤/로딩 UX 보강

### 6. 반응형 UI & UX 설계

- 모바일 대응 및 포커스 흐름 고려
- 프로그레스 바 / 애니메이션 / 접근성 요소 적용

---

## 📁 디렉토리 구조

```
src/
├─ components/
│ ├─ Scenario/ # 시나리오용 컴포넌트
│ ├─ Window/ # TextWindow, CenterWindow, HelpWindow 등
│ └─ Common/ # 공통 버튼, 스타일 유틸
├─ data/ # 시나리오 시퀀스 데이터 (scenarioData)
├─ hooks/ # 커스텀 훅 (디바운스, 포켓몬 등)
├─ pages/
│ ├─ index.tsx # 시나리오 메인 진입
│ └─ posts.tsx # JSONPlaceholder 데이터 페이지
├─ stores/ # Zustand - UI 상태 관리
├─ atoms/ # Recoil - 시나리오 진행 상태
└─ styles/ # 글로벌 스타일, 테마
```

🔗 배포 & 링크
🔍 데모: https://thebriefing.vercel.app/

📁 GitHub: https://github.com/kimminkum/thebriefing

📌 참고 사항
본 프로젝트는 지원자 역량과 UI 흐름 구성력을 전달하기 위해 기획된 자기소개형 포트폴리오입니다.
실제 API 예제와 UX 흐름을 반영해 사용자의 몰입감과 채용 담당자의 이해도를 높이는 데 중점을 두었습니다.
이 포트폴리오를 통해 저의 프론트엔드 개발자로서의 사고 방식과 문제 해결 접근법을 살펴봐 주세요.
