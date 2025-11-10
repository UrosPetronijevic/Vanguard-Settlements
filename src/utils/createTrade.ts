export default function createTrade(townType: string) {
  let tradeStation;

  if (townType === "Elysium town" || townType === "Volcano town") {
    tradeStation = {
      buildingName: "Trade Station",
      level: 0,
      tradeRouts: {
        town1: {
          resource: null,
          sender: {},
          receiver: {},
        },

        town2: {
          resource: null,
          sender: {},
          receiver: {},
        },

        town3: {
          resource: null,
          sender: {},
          receiver: {},
        },

        town4: {
          resource: null,
          sender: {},
          receiver: {},
        },
      },
    };
  } else {
    tradeStation = {
      buildingName: "Trade Station",
      level: 0,
      tradeRouts: {
        town1: {
          resource: null,
          sender: {},
          receiver: {},
        },

        town2: {
          resource: null,
          sender: {},
          receiver: {},
        },
      },
    };
  }

  return tradeStation;
}
