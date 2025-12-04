import { supabase } from "../../services/supabaseClient";
import type { Resources, TradeStation, Barracks } from "../../types/townTypes";

export default async function updateTownData(
  id: string,
  tradeStation: TradeStation,
  resources: Resources,
  barracks: Barracks
) {
  const { error } = await supabase
    .from("Towns")
    .update({
      tradeStation: tradeStation,
      resources: resources,
      barracks: barracks,
    })
    .eq("id", id);

  if (error) {
    console.error(`Error updating town with ID ${id}:`, error);
    throw error;
  } else {
    console.log(`Town with ID ${id} successfully updated.`);
  }
}
