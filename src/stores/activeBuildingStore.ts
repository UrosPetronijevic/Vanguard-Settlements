// activeHomePageStore.tsx
import { create } from "zustand";
import type { Building } from "../types/gameplay/genericTypes";
import type { Barracks, TradeStation } from "../types/townTypes";

interface ActiveBuildingState {
  activeBuilding: Building | Barracks | TradeStation | null;
  setActiveBuilding: (
    pageName: Building | Barracks | TradeStation | null
  ) => void;
}

export const useActiveBuildingStore = create<ActiveBuildingState>((set) => ({
  activeBuilding: null,
  setActiveBuilding: (building: Building | Barracks | TradeStation | null) =>
    set({ activeBuilding: building }),
}));
