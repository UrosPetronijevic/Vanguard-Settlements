import { supabase } from "../../services/supabaseClient";
import useSessionStore from "../../stores/sessionStore";

export async function updateSessionFromSupabase(): Promise<boolean> {
  const { setSession, setIsLoading } = useSessionStore.getState();

  setIsLoading(true);

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
  } finally {
    setIsLoading(false);
  }
}
