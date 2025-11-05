import generateBuildings from "./generateBuildings";
import generateResources from "./generateResources";

type CreateTownProps = {
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

export default function createTown({
  townId,
  townName,
  townType,
  townCoordinates,
  townStatus,
  isCapital,
  townOwner,
}: CreateTownProps) {
  const buildings = generateBuildings(townType);
  const resources = generateResources(townType);

  const town = {
    id: townId,
    name: townName,
    type: townType,
    coordinates: townCoordinates,
    status: townStatus,
    isCapital: isCapital,
    owner: townOwner,

    buildings: buildings,
    resources: resources,
  };

  return town;
}
