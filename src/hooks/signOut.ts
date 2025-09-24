import { supabase } from "../services/supabaseClient";

export default function signOut() {
  const { error }: any = supabase.auth.signOut();

  if (error) {
    console.error("There was an error: ", error);
  }
}
