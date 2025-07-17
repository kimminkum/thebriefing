// src/stores/uiStore.ts
import { create } from 'zustand';

interface FilterState {
  filter: string;
  setFilter: (value: string) => void;
  selectedUserId: number | null;
  setSelectedUserId: (id: number | null) => void;
}

export const useFilterStore = create<FilterState>((set) => ({
  filter: '',
  selectedUserId: null,

  setFilter: (value) => set({ filter: value }),
  setSelectedUserId: (id) => set({ selectedUserId: id }),
}));
