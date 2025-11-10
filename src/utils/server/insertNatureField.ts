import { supabase } from "../../services/supabaseClient";

type Coordinates = {
  townCoordinates: {
    x: number;
    y: number;
  };
};

export default async function insertNatureField(
  fieldId: string,
  fieldCoordinates: Coordinates,
  fieldType: string,
  fieldOwner: string
) {
  const { error } = await supabase.from("Nature Fields").insert({
    id: fieldId,
    coordinates: fieldCoordinates,
    type: fieldType,
    owner: fieldOwner,
  });

  if (error) {
    console.error("Error inserting Nature Field:", error);
  }
}
