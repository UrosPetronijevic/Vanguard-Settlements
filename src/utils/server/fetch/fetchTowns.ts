import { supabase } from "../../../services/supabaseClient";

export default async function fetchTowns() {
  let { data, error } = await supabase.from("Towns").select("*");

  if (error) console.error(error);

  return data;
}
