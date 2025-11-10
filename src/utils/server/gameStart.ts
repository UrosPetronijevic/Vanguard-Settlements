import createMap from "../createMap";
import createTown from "../createTown";
import insertNatureField from "./insertNatureField";
import insertTown from "./insertTown";

export default async function gameStart() {
  let map = createMap();

  let x = Math.floor(Math.random() * 8) + 1;
  let y = Math.floor(Math.random() * 8) + 1;

  let startingCapital = createTown(
    map[y - 1][x - 1].id,
    "Capital",
    "Hills town",
    {
      x: map[y - 1][x - 1].coordinates.x,
      y: map[y - 1][x - 1].coordinates.y,
    },
    "city",
    true,
    `${"oke"}`
  );

  map[y - 1][x - 1] = startingCapital;

  for (let i = 0; i < map.length; i++) {
    for (let j = 0; j < map[i].length; j++) {
      const element = map[i][j];

      if (element.status !== undefined) {
        // It's a town
        await insertTown(
          element.id,
          element.name,
          element.type,
          element.coordinates,
          element.status,
          element.isCapital,
          element.owner,
          element.buildings,
          element.barracks,
          element.tradeStation,
          element.resources
        );
      } else {
        // It's a nature field
        await insertNatureField(
          element.id,
          { townCoordinates: element.coordinates },
          element.type,
          element.owner
        );
      }
    }
  }
}
