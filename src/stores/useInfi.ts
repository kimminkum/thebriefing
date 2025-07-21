// src/stores/infiniteScrollStore.ts
import { create } from 'zustand';

type SortOrder = 'asc' | 'desc';

interface InfiniteScrollState {
  deletedIds: number[];
  deletePost: (id: number) => void;
  toggleSortOrder: () => void;

  sortOrder: SortOrder;
  resetDeleted: () => void; // 🔁 초기화용
}

export const useInfiniteScrollStore = create<InfiniteScrollState>((set) => ({
  deletedIds: [],
  sortOrder: 'asc',
  deletePost: (id) =>
    set((state) => ({
      deletedIds: [...state.deletedIds, id],
    })),
  toggleSortOrder: () =>
    set((s) => ({
      sortOrder: s.sortOrder === 'asc' ? 'desc' : 'asc',
    })),
  resetDeleted: () => set({ deletedIds: [] }),
}));
