// activeHomePageStore.tsx
import { create } from "zustand";

interface ActiveHomePageState {
  activePage: string;
  setActivePage: (pageName: string) => void;
}

export const useActiveHomePageStore = create<ActiveHomePageState>((set) => ({
  activePage: "home",
  setActivePage: (pageName: string) => set({ activePage: pageName }),
}));
