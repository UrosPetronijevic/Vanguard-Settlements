import { supabase } from "../services/supabaseClient";

type InsertTownProps = {
  townId: string;
  townName: string;
  townType: string;
  townCoordinates: {
    x: number;
    y: number;
  };
  townStatus: string;
  isCapital: string;
  townOwner: string;
};

export default async function insertTown({
  townId,
  townName,
  townType,
  townCoordinates,
  townStatus,
  isCapital,
  townOwner,
}: InsertTownProps) {
  const { error } = await supabase.from("Towns").insert({
    id: townId,
    name: townName,
    type: townType,
    coordinates: townCoordinates,
    status: townStatus,
    isCapital: isCapital,
    owner: townOwner,
  });
}
