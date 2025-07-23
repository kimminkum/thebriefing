import { create } from 'zustand';

type SortOrder = 'asc' | 'desc';

interface InfiniteScrollState {
  sortOrder: SortOrder;
  toggleSortOrder: () => void;
}

export const useInfiniteScrollStore = create<InfiniteScrollState>((set) => ({
  sortOrder: 'asc',
  toggleSortOrder: () =>
    set((s) => ({
      sortOrder: s.sortOrder === 'asc' ? 'desc' : 'asc',
    })),
}));
