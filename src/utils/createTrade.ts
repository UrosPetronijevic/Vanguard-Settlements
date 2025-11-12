export default function createTrade(townType: string, townId: string) {
  let tradeStation;

  if (townType === "Elysium town" || townType === "Volcano town") {
    tradeStation = {
      buildingName: "Trade Station",
      level: 0,
      tradeRouts: [
        {
          resource: null,
          sender: townId,
          receiver: null,
          percent: 0,
        },

        {
          resource: null,
          sender: townId,
          receiver: null,
          percent: 0,
        },

        {
          resource: null,
          sender: townId,
          receiver: null,
          percent: 0,
        },

        {
          resource: null,
          sender: townId,
          receiver: null,
          percent: 0,
        },
      ],
    };
  } else {
    tradeStation = {
      buildingName: "Trade Station",
      level: 0,
      tradeRouts: [
        {
          resource: null,
          sender: townId,
          receiver: null,
          percent: 0,
        },

        {
          resource: null,
          sender: townId,
          receiver: null,
          percent: 0,
        },
      ],
    };
  }

  return tradeStation;
}
