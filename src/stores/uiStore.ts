// src/stores/uiStore.ts
import { create } from "zustand";

interface UIState {
  // 튜토리얼 모달 열림 여부
  showTutorial: boolean;
  // 텍스트 윈도우 보임/숨김
  textWindowVisible: boolean;
  // 클릭 잠금 상태
  isClickLocked: boolean;
  // 타이핑 속도(ms)
  typingSpeed: number;
  // UI 모드 토글 (HelpWindow의 ? 설정 등)
  isUiMode: boolean;

  // 액션들
  toggleTutorial: () => void;
  toggleTextWindowVisible: () => void;
  lockClickTemporarily: (duration?: number) => void;
  setTypingSpeed: (speed: number) => void;
  toggleUiMode: () => void;
}

export const useUIStore = create<UIState>((set) => ({
  showTutorial: true,
  textWindowVisible: true,
  isClickLocked: false,
  typingSpeed: 10,
  isUiMode: false,

  toggleTutorial: () => set((s) => ({ showTutorial: !s.showTutorial })),
  toggleTextWindowVisible: () =>
    set((s) => ({ textWindowVisible: !s.textWindowVisible })),
  lockClickTemporarily: (duration = 611) => {
    set({ isClickLocked: true });
    setTimeout(() => set({ isClickLocked: false }), duration);
  },
  setTypingSpeed: (speed) => set({ typingSpeed: speed }),
  toggleUiMode: () => set((s) => ({ isUiMode: !s.isUiMode }))
}));
