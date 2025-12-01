// activeHomePageStore.tsx (renamed to reflect actual usage, assuming it's for trade popup)
import { create } from "zustand";

interface UnitPopupStore {
  unitPopup: boolean;
  setUnitpopup: (bool: boolean) => void;
}

export const useUnitPopupStore = create<UnitPopupStore>((set) => ({
  unitPopup: false,
  setUnitpopup: (bool: boolean) => set({ unitPopup: bool }),
}));
