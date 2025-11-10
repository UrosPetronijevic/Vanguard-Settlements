// stores/playerTownsStore.ts
import { create } from "zustand";
import type { Town } from "../../types/townTypes";

interface PlayerTownsState {
  towns: Town[] | [];
  activeTown: any;
  isLoading: boolean;
  error: string | null;

  setTowns: (newTowns: Town[]) => void;
  addTown: (town: Town) => void;
  removeTown: (townId: string) => void;
  setActiveTown: (townId: any) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
}

// 3. Create your store
export const usePlayerTownsStore = create<PlayerTownsState>((set) => ({
  // Initial state
  towns: [],

  activeTown: "",
  isLoading: false,
  error: null,

  // Actions
  setTowns: (newTowns) => set({ towns: newTowns }),

  addTown: (town) => set((state) => ({ towns: [...state.towns, town] })),

  removeTown: (townId) =>
    set((state) => ({
      towns: state.towns.filter((town) => town.id !== townId),
      // If the removed town was active, set activeTown to null
      activeTownId: state.activeTown === townId ? null : state.activeTown,
    })),

  setActiveTown: (townId) => set({ activeTown: townId }),

  setLoading: (loading) => set({ isLoading: loading }),

  setError: (error) => set({ error: error }),
}));
