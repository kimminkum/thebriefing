// src/stores/uiStore.ts
import { create } from 'zustand';

type SortOrder = 'asc' | 'desc';

interface SortState {
  filterling: string;
  sortOrder: SortOrder;
  deletedPostIds: number[];

  setFilter: (value: string) => void;
  toggleSortOrder: () => void;
  deletePost: (id: number) => void;
}

export const useSortStore = create<SortState>((set) => ({
  filterling: '',
  sortOrder: 'asc',
  deletedPostIds: [],

  setFilter: (value) => set({ filterling: value }),
  toggleSortOrder: () =>
    set((s) => ({
      sortOrder: s.sortOrder === 'asc' ? 'desc' : 'asc',
    })),
  deletePost: (id) => set((s) => ({ deletedPostIds: [...s.deletedPostIds, id] })),
}));
