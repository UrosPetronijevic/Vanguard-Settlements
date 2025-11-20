import { supabase } from "../../services/supabaseClient";
import type { Resources, TradeStation } from "../../types/townTypes";

export default async function updateTowns(
  id: string,
  tradeStation: TradeStation, // Use your TradeStation type
  resources: Resources // Use your Resources type
) {
  const { error } = await supabase
    .from("Towns")
    .update({
      tradeStation: tradeStation,
      resources: resources,
    })
    .eq("id", id);

  if (error) {
    console.error(`Error updating town with ID ${id}:`, error);
  } else {
    console.log(`Town with ID ${id} successfully updated.`);
  }
}
