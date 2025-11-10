type Buildings = {
  production: [
    building1?: ProductionBuilding,

    building2?: ProductionBuilding,

    building3?: ProductionBuilding,

    buildin4?: ProductionBuilding,

    building5?: ProductionBuilding,

    building6?: ProductionBuilding,

    building7?: ProductionBuilding,

    building8?: ProductionBuilding,

    building9?: ProductionBuilding,

    building10?: ProductionBuilding,

    building11?: ProductionBuilding,

    building12?: ProductionBuilding,

    building13?: ProductionBuilding,

    building14?: ProductionBuilding,

    building15?: ProductionBuilding
  ];

  baracks: {
    buildingName: string;
    level: number;
  };

  tradeStation: {
    buildingName: string;
    level: number;
    traders: number;

    tradeRouts: {
      route1?: {
        senderId: string | null;
        receiverId: string | null;
      };

      route2?: {
        senderId: string | null;
        receiverId: string | null;
      };

      route3?: {
        senderId: string | null;
        receiverId: string | null;
      };
    };
  };
};

export type ProductionBuilding = {
  buildingName: string;
  level: number;
  productionBonus: number;
};

type Resources = {
  wood: {
    amount: number;
    perHour: number;
  };

  food: {
    amount: number;
    perHour: number;
  };

  water: {
    amount: number;
    perHour: number;
  };

  stone: {
    amount: number;
    perHour: number;
  };

  metal: {
    amount: number;
    perHour: number;
  };

  clay: {
    amount: number;
    perHour: number;
  };

  sand: {
    amount: number;
    perHour: number;
  };
};

export type Town = {
  id: string;
  name: string;
  type:
    | "Elysium town"
    | "Hills town"
    | "Lake town"
    | "Jungle town"
    | "Caverns town"
    | "Dune town"
    | "Wasteland town"
    | "Grassland town"
    | "Volcano town";
  coordinates: { x: number; y: number };
  status: "village" | "town" | "megalopolis";
  isCapital: boolean;
  owner: string;
  resources: Resources;

  buildings: Buildings;
};
