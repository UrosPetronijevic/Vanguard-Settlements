import { supabase } from "../services/supabaseClient";

export default async function signInUser(email: any, password: any) {
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });
    if (error) {
      console.error("Sign in error: ", error);
      return { success: false, error: error.message };
    }

    console.log("sign-in success", data);
    return { success: true, data };
  } catch (error) {
    console.error("An error occured: ", error);
  }
}
