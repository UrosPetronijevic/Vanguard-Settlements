// activeHomePageStore.tsx
import { create } from "zustand";

interface tradeRoutPopupState {
  activeTrade: boolean;
  setActiveTrade: (bool: boolean) => void;

  tradeReceiver: any;
  setTradeReceiver: (town: any) => void;

  tradeRoutPopup: boolean;
  setTradeRoutPopup: (bool: boolean) => void;
}

export const useTradeRoutPopupStore = create<tradeRoutPopupState>((set) => ({
  activeTrade: false,
  setActiveTrade: (bool: boolean) => set({ activeTrade: bool }),

  tradeReceiver: null,
  setTradeReceiver: (town: boolean) => set({ tradeReceiver: town }),

  tradeRoutPopup: false,
  setTradeRoutPopup: (bool: boolean) => set({ tradeRoutPopup: bool }),
}));
