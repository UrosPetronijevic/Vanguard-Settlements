// activeHomePageStore.tsx (renamed to reflect actual usage, assuming it's for trade popup)
import { create } from "zustand";

interface TradeRoutPopupState {
  // Consistent naming with component
  activeTrade: boolean;
  setActiveTrade: (bool: boolean) => void;

  resource: string | null;
  setResource: (res: string | null) => void;

  percent: number;
  setPercent: (value: number) => void;

  routIndex: number;
  setRoutIndex: (value: number) => void;

  tradeReceiver: any | null;
  setTradeReceiver: (town: any | null) => void;

  tradeRoutPopup: boolean;
  setTradeRoutPopup: (bool: boolean) => void;
}

export const useTradeRoutPopupStore = create<TradeRoutPopupState>((set) => ({
  activeTrade: false,
  setActiveTrade: (bool: boolean) => set({ activeTrade: bool }),

  tradeReceiver: null,
  setTradeReceiver: (town: any | null) => set({ tradeReceiver: town }),

  resource: null,
  setResource: (res: string | null) => set({ resource: res }),

  percent: 0,
  setPercent: (value: number) => set({ percent: value }),

  routIndex: 0,
  setRoutIndex: (value: number) => set({ routIndex: value }),

  tradeRoutPopup: false,
  setTradeRoutPopup: (bool: boolean) => set({ tradeRoutPopup: bool }),
}));
