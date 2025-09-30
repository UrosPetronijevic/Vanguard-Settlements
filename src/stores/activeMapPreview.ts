// activeHomePageStore.tsx
import { create } from "zustand";

interface ActiveMapPreviewState {
  activeMap: string;
  setActiveMap: (map: string) => void;
}

export const useActiveMapPreviewStore = create<ActiveMapPreviewState>(
  (set) => ({
    activeMap: "",
    setActiveMap: (map: string) => set({ activeMap: map }),
  })
);
