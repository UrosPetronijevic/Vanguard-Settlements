// activeHomePageStore.tsx
import { create } from "zustand";

interface ActiveCreatureState {
  activeCreature: string | null;
  setActiveCreature: (pageName: string | null) => void;
}

export const useActiveCreatureStore = create<ActiveCreatureState>((set) => ({
  activeCreature: null,
  setActiveCreature: (creature: string | null) =>
    set({ activeCreature: creature }),
}));
