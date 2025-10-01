import { create } from "zustand";

interface GameNavState {
  activeNavPage: string;
  setNavPage: (pageName: string) => void;
}

export const useGameNavStore = create<GameNavState>((set) => ({
  activeNavPage: "towns",
  setNavPage: (pageName: string) => set({ activeNavPage: pageName }),
}));
