import type { Barracks } from "../types/townTypes";

export default function createBarracks(townType: string) {
  const baracks: Barracks = {
    buildingName: "",
    level: 0,
    trainingTime: 0,

    army: {
      swordman: {
        unitType: "swordman",
        amount: 0,
        stats: {
          attack: 10,
          defense: 5,
          health: 30,
          bonusDmg: 5,
        },
        cost: {
          wood: 0,
          metal: 10,
          foodConsumption: 1,
          waterConsumption: 1,
        },
      },
      spearman: {
        unitType: "spearman",
        amount: 0,
        stats: {
          attack: 7,
          defense: 8,
          health: 30,
          bonusDmg: 5,
        },
        cost: {
          wood: 7,
          metal: 3,
          foodConsumption: 1,
          waterConsumption: 1,
        },
      },
      horseman: {
        unitType: "horseman",
        amount: 0,
        stats: {
          attack: 10,
          defense: 7,
          health: 40,
          bonusDmg: 5,
        },
        cost: {
          wood: 10,
          metal: 10,
          foodConsumption: 2,
          waterConsumption: 2,
        },
      },
    },
  };

  switch (townType) {
    case "Elysium town":
      baracks.buildingName = "Elysium Barracks";
      return baracks;
    case "Hills town":
      baracks.buildingName = "Hills Barracks";
      return baracks;
    case "Lake town":
      baracks.buildingName = "Laketown Barracks";
      return baracks;
    case "Jungle town":
      baracks.buildingName = "Jungle Barracks";
      return baracks;
    case "Caverns town":
      baracks.buildingName = "Caverns Barracks";
      return baracks;
    case "Dune town":
      baracks.buildingName = "Dune Barracks";
      return baracks;
    case "Wasteland town":
      baracks.buildingName = "Wasteland Barracks";
      return baracks;
    case "Grassland town":
      baracks.buildingName = "Grassland Barracks";
      return baracks;
    case "Volcano town":
      baracks.buildingName = "Volcano Barracks";
      return baracks;
  }
}
