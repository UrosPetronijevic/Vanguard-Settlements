export default function generateBuildings(townType: string) {
  let buildings;

  switch (townType) {
    case "Elysium town":
      return (buildings = [
        { buildingName: "Western Silo", level: 0, productionBonus: 0 },
        { buildingName: "Eastern Silo", level: 0, productionBonus: 0 },
        { buildingName: "Western Watter Mill", level: 0, productionBonus: 0 },
        { buildingName: "Eastern Watter Mill", level: 0, productionBonus: 0 },
        {
          buildingName: "Western Harvesters Lodge",
          level: 0,
          productionBonus: 0,
        },
        {
          buildingName: "Eastern Harvesters Lodge",
          level: 0,
          productionBonus: 0,
        },
        { buildingName: "Downtown Bakery", level: 0, productionBonus: 0 },
        { buildingName: "Riverside Bakery", level: 0, productionBonus: 0 },
        { buildingName: "Bazar Bakery", level: 0, productionBonus: 0 },
        { buildingName: "Weapon Smith", level: 0, productionBonus: 0 },
        { buildingName: "Barracks", level: 0, productionBonus: 0 },
        { buildingName: "Trade Station", level: 0 },
      ]);
    case "Hills town":
      return (buildings = [
        { buildingName: "Farm", level: 0, productionBonus: 0 },
        { buildingName: "Spring", level: 0, productionBonus: 0 },
        { buildingName: "Woodcutter", level: 0, productionBonus: 0 },
        { buildingName: "Stone Mason", level: 0, productionBonus: 0 },
        { buildingName: "Weapon Smith", level: 0, productionBonus: 0 },
        { buildingName: "Barracks", level: 0, productionBonus: 0 },
        { buildingName: "Trade Station", level: 0 },
      ]);
    case "Lake town":
      return (buildings = [
        { buildingName: "Downtown Fishery", level: 0, productionBonus: 0 },
        { buildingName: "Central Fishery", level: 0, productionBonus: 0 },
        { buildingName: "Deepwater Fishery", level: 0, productionBonus: 0 },
        { buildingName: "Hydration Hub", level: 0, productionBonus: 0 },
        { buildingName: "Filtration Facility", level: 0, productionBonus: 0 },
        { buildingName: "Water Purifier", level: 0, productionBonus: 0 },
        { buildingName: "Clay Extractor", level: 0, productionBonus: 0 },
        { buildingName: "Weapon Smith", level: 0, productionBonus: 0 },
        { buildingName: "Barracks", level: 0, productionBonus: 0 },
        { buildingName: "Trade Station", level: 0 },
      ]);
    case "Jungle town":
      return (buildings = [
        { buildingName: "Hunting Cabin", level: 0, productionBonus: 0 },
        { buildingName: "Western Woodcutter", level: 0, productionBonus: 0 },
        { buildingName: "Eastern Woodcutter", level: 0, productionBonus: 0 },
        { buildingName: "Northern Woodcutter", level: 0, productionBonus: 0 },
        { buildingName: "Water Collector", level: 0, productionBonus: 0 },
        { buildingName: "Weapon Smith", level: 0, productionBonus: 0 },
        { buildingName: "Barracks", level: 0, productionBonus: 0 },
        { buildingName: "Trade Station", level: 0 },
      ]);
    case "Caverns town":
      return (buildings = [
        { buildingName: "Fungal Forgery", level: 0, productionBonus: 0 },
        { buildingName: "Downtown Stone Mason", level: 0, productionBonus: 0 },
        { buildingName: "Artisan Stone Mason", level: 0, productionBonus: 0 },
        { buildingName: "Grand Stone Mason", level: 0, productionBonus: 0 },
        { buildingName: "Water Collector", level: 0, productionBonus: 0 },
        { buildingName: "Weapon Smith", level: 0, productionBonus: 0 },
        { buildingName: "Barracks", level: 0, productionBonus: 0 },
        { buildingName: "Trade Station", level: 0 },
      ]);
    case "Dune town":
      return (buildings = [
        { buildingName: "Sand Extractor", level: 0, productionBonus: 0 },
        { buildingName: "Grit Harvester", level: 0, productionBonus: 0 },
        { buildingName: "Silica Sifter", level: 0, productionBonus: 0 },
        { buildingName: "Grull farm", level: 0, productionBonus: 0 },
        { buildingName: "Water Exractor", level: 0, productionBonus: 0 },
        { buildingName: "Weapon Smith", level: 0, productionBonus: 0 },
        { buildingName: "Barracks", level: 0, productionBonus: 0 },
        { buildingName: "Trade Station", level: 0 },
      ]);
    case "Wasteland town":
      return (buildings = [
        { buildingName: "Clay Extractor", level: 0, productionBonus: 0 },
        { buildingName: "Clay Quarry", level: 0, productionBonus: 0 },
        { buildingName: "Clay Mine", level: 0, productionBonus: 0 },
        { buildingName: "Grull farm", level: 0, productionBonus: 0 },
        { buildingName: "Stone Exractor", level: 0, productionBonus: 0 },
        { buildingName: "Weapon Smith", level: 0, productionBonus: 0 },
        { buildingName: "Barracks", level: 0, productionBonus: 0 },
        { buildingName: "Trade Station", level: 0 },
      ]);
    case "Volcano town":
      return (buildings = [
        { buildingName: "Lava Extractor", level: 0, productionBonus: 0 },
        { buildingName: "Magma Harvester", level: 0, productionBonus: 0 },
        { buildingName: "Stone Mine", level: 0, productionBonus: 0 },
        { buildingName: "Stone quarry", level: 0, productionBonus: 0 },
        { buildingName: "Weapon Forger", level: 0, productionBonus: 0 },
        { buildingName: "Weapon Smith", level: 0, productionBonus: 0 },
        { buildingName: "Barracks", level: 0, productionBonus: 0 },
        { buildingName: "Trade Station", level: 0 },
      ]);
  }

  return buildings;
}
