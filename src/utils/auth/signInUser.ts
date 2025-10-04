import { supabase } from "../../services/supabaseClient";
import { updateSessionFromSupabase } from "./auth";

export default async function signInUser(email: any, password: any) {
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });
    if (error) {
      console.error("Sign in error: ", error);
      await updateSessionFromSupabase();
      return { success: false, error: error.message };
    }

    console.log("sign-in success", data);
    await updateSessionFromSupabase();
    return { success: true, data };
  } catch (error: any) {
    console.error("An error occured: ", error);

    await updateSessionFromSupabase();
    return { success: false, error: error.message };
  }
}
