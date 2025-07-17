// src/stores/uiStore.ts
import { create } from 'zustand';

interface ListState {
  pages: number;
  setPages: (pages: number) => void;
  nextPage: () => void;
  prevPage: () => void;
}

export const useListStore = create<ListState>((set) => ({
  pages: 1,

  setPages: (pages) => set({ pages }),
  nextPage: () => set((s) => ({ pages: s.pages + 1 })),
  prevPage: () => set((s) => ({ pages: Math.max(1, s.pages - 1) })),
}));
