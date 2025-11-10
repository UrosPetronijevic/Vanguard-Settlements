import createBarracks from "./createBarracks";
import createTrade from "./createTrade";
import generateBuildings from "./generateBuildings";
import generateResources from "./generateResources";

type Coordinates = {
  x: number;
  y: number;
};

export default function createTown(
  townId: string,
  townName: string,
  townType: string,
  townCoordinates: Coordinates,
  townStatus: string,
  isCapital: boolean,
  townOwner: string
) {
  const buildings = generateBuildings(townType);
  const barracks = createBarracks(townType);
  const tradeStation = createTrade(townType);
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
    barracks: barracks,
    tradeStation: tradeStation,
    resources: resources,
  };

  return town;
}
