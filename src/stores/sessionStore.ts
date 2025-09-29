import { create } from "zustand";
import { type Session } from "@supabase/supabase-js";

interface SessionState {
  session: Session | null;
  setSession: (session: Session | null) => void;
}

const useSessionStore = create<SessionState>((set) => ({
  session: null,
  setSession: (session) => set({ session }),
}));

export default useSessionStore;
