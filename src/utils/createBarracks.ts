export default function createBarracks(townType: string) {
  const baracks = {
    buildingName: "",
    level: 0,
    trainingTime: 0,

    army: {},
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
