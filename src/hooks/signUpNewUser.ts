import { supabase } from "../services/supabaseClient.ts";

export default async function signUpNewUser(email: any, password: any) {
  const { data, error } = await supabase.auth.signUp({
    email: email,
    password: password,
  });

  if (error) {
    console.error("There was a problem signing up:", error);
    return { success: false, error };
  }
  return { success: true, data };
}
