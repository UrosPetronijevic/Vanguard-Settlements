import { create } from "zustand";
import { type Session } from "@supabase/supabase-js";

interface SessionState {
  session: Session | null;
  isLoading: boolean;
  setSession: (session: Session | null) => void;
  setIsLoading: (loading: boolean) => void;
}

const useSessionStore = create<SessionState>((set) => ({
  session: null,
  isLoading: true,
  setSession: (session) => set({ session }),
  setIsLoading: (loading) => set({ isLoading: loading }),
}));

export default useSessionStore;
