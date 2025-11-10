import { supabase } from "../../services/supabaseClient";

export default async function insertTown(
  townId: string,
  townName: string,
  townType: string,
  townCoordinates: any,
  townStatus: string,
  isCapital: boolean,
  townOwner: string,
  buildings: any,
  barracks: any,
  tradeStation: any,
  resources: any
) {
  const { error } = await supabase.from("Towns").insert({
    id: townId,
    name: townName,
    type: townType,
    coordinates: townCoordinates,
    status: townStatus,
    isCapital: isCapital,
    owner: townOwner,
    buildings: buildings,
    barracks: barracks,
    tradeStation: tradeStation,
    resources: resources,
  });

  if (error) {
    console.error("Error inserting Nature Field:", error);
  }
}
