// stores/playerTownsStore.ts
import { create } from "zustand";
import type { Town } from "../../types/townTypes";

interface PlayerTownsState {
  towns: Town[] | [];
  activeTownId: string | null;
  isLoading: boolean;
  error: string | null;

  setTowns: (newTowns: Town[]) => void;
  addTown: (town: Town) => void;
  removeTown: (townId: string) => void;
  setActiveTown: (townId: string | null) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
}

// 3. Create your store
export const usePlayerTownsStore = create<PlayerTownsState>((set) => ({
  // Initial state
  towns: [],

  activeTownId: "t1",
  isLoading: false,
  error: null,

  // Actions
  setTowns: (newTowns) => set({ towns: newTowns }),

  addTown: (town) => set((state) => ({ towns: [...state.towns, town] })),

  removeTown: (townId) =>
    set((state) => ({
      towns: state.towns.filter((town) => town.id !== townId),
      // If the removed town was active, set activeTownId to null
      activeTownId: state.activeTownId === townId ? null : state.activeTownId,
    })),

  setActiveTown: (townId) => set({ activeTownId: townId }),

  setLoading: (loading) => set({ isLoading: loading }),

  setError: (error) => set({ error: error }),
}));
