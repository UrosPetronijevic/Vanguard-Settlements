import { create } from "zustand";

interface ActiveGameSessionState {
  gameSession: boolean;
  setGameSession: (isActive: boolean) => void;
}

export const useActiveGameSessionStore = create<ActiveGameSessionState>(
  (set) => ({
    gameSession: false,
    setGameSession: (isActive: boolean) => set({ gameSession: isActive }),
  })
);
