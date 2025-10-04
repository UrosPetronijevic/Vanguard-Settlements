import { supabase } from "../../services/supabaseClient.ts";
import { updateSessionFromSupabase } from "./auth.ts";

export default async function signUpNewUser(email: any, password: any) {
  const { data, error } = await supabase.auth.signUp({
    email: email,
    password: password,
  });

  if (error) {
    console.error("There was a problem signing up:", error);
    await updateSessionFromSupabase();
    return { success: false, error };
  }

  await updateSessionFromSupabase();
  return { success: true, data };
}
