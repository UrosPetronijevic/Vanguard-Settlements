import { supabase } from "../../../services/supabaseClient";

export default async function fetchNatureFields() {
  let { data, error } = await supabase.from("Nature Fields").select("*");

  if (error) console.error(error);

  return data;
}
