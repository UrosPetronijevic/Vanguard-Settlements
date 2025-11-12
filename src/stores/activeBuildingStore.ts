// activeHomePageStore.tsx
import { create } from "zustand";

type Building = {
  buildingName: string;
  level: number;
  productionBonus: number;
};

interface ActiveBuildingState {
  activeBuilding: Building | null;
  setActiveBuilding: (pageName: Building | null) => void;
}

export const useActiveBuildingStore = create<ActiveBuildingState>((set) => ({
  activeBuilding: null,
  setActiveBuilding: (building: Building | null) =>
    set({ activeBuilding: building }),
}));
