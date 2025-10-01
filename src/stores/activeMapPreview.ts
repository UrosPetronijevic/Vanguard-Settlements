// activeHomePageStore.tsx
import { create } from "zustand";

interface ActiveMapPreviewState {
  activeMap: string;
  setActiveMap: (map: string) => void;
}

export const useActiveMapPreviewStore = create<ActiveMapPreviewState>(
  (set) => ({
    activeMap: "10x10",
    setActiveMap: (map: string) => set({ activeMap: map }),
  })
);
