import { supabase } from "../services/supabaseClient";
import useSessionStore from "../stores/sessionStore"; // Adjust path as needed

export async function updateSessionFromSupabase(): Promise<boolean> {
  const setSession = useSessionStore.getState().setSession;

  try {
    const {
      data: { session },
      error,
    } = await supabase.auth.getSession();

    if (error) {
      console.error("Error fetching session:", error.message);
      setSession(null);
      return false;
    }

    setSession(session);
    console.log("Session updated:", session);
    return !!session;
  } catch (err) {
    console.error("An unexpected error occurred while updating session:", err);
    setSession(null);
    return false;
  }
}
