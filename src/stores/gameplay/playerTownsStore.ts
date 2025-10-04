// stores/playerTownsStore.ts
import { create } from "zustand";
import type { Town } from "../../types/townTypes";

import ElysiumTown from "../../assets/images/towns/elysian/Elysian Fields-town-2.png";

interface PlayerTownsState {
  towns: Town[];
  activeTownId: string | null;
  isLoading: boolean;
  error: string | null;

  setTowns: (newTowns: Town[]) => void;
  addTown: (town: Town) => void;
  removeTown: (townId: string) => void;
  setActiveTown: (townId: string | null) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
}

// 3. Create your store
export const usePlayerTownsStore = create<PlayerTownsState>((set) => ({
  // Initial state
  towns: [
    {
      id: "t1",
      name: "Capital City",
      type: "Elysium town",
      coordinates: { x: 50, y: 50 },
      status: "megalopolis",
      isCapital: true,
      image: "../../../assets/images/towns/elysian/Elysian Fields-town-2.png", // Placeholder image
      owner: "Player123",
    },
    {
      id: "t2",
      name: "Whispering Woods",
      type: "Forest town",
      coordinates: { x: 20, y: 80 },
      status: "city",
      isCapital: false,
      image: "https://via.placeholder.com/150/008000/FFFFFF?text=Forest",
      owner: "Player123",
    },
    {
      id: "t3",
      name: "Dune Watch",
      type: "Dune town",
      coordinates: { x: 90, y: 10 },
      status: "town",
      isCapital: false,
      image: "https://via.placeholder.com/150/FFD700/000000?text=Dune",
      owner: "Player123",
    },
    {
      id: "t4",
      name: "Riverbend",
      type: "Riverside town",
      coordinates: { x: 35, y: 65 },
      status: "town",
      isCapital: false,
      image: "https://via.placeholder.com/150/00FFFF/000000?text=River",
      owner: "Player123",
    },
  ],
  activeTownId: null,
  isLoading: false,
  error: null,

  // Actions
  setTowns: (newTowns) => set({ towns: newTowns }),

  addTown: (town) => set((state) => ({ towns: [...state.towns, town] })),

  removeTown: (townId) =>
    set((state) => ({
      towns: state.towns.filter((town) => town.id !== townId),
      // If the removed town was active, set activeTownId to null
      activeTownId: state.activeTownId === townId ? null : state.activeTownId,
    })),

  setActiveTown: (townId) => set({ activeTownId: townId }),

  setLoading: (loading) => set({ isLoading: loading }),

  setError: (error) => set({ error: error }),
}));
