import { supabase } from "../../services/supabaseClient";
import { updateSessionFromSupabase } from "./auth";

export default async function signOut() {
  try {
    const { error } = await supabase.auth.signOut();

    if (error) {
      console.error("There was an error signing out: ", error);
      await updateSessionFromSupabase();
      return { success: false, error: error.message };
    }

    console.log("Sign out successful");
    await updateSessionFromSupabase();
    return { success: true };
  } catch (error: any) {
    console.error("An error occurred during sign out: ", error);
    await updateSessionFromSupabase();
    return { success: false, error: error.message };
  }
}
