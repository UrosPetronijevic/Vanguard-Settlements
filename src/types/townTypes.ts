// Define your specific resource names as a union type for better strictness
export type ResourceName =
  | "wood"
  | "food"
  | "water"
  | "stone"
  | "metal"
  | "clay"
  | "sand";

// --- Resource Types ---
export type Resource = {
  amount: number;
  perHour: number;
  percentAdd: number;
  percentSub: number;
};

// Use a Record type for Resources for better flexibility and type safety
export type Resources = Record<ResourceName, Resource>;

// --- Building Types ---
export type ProductionBuilding = {
  buildingName: string;
  level: number;
  productionBonus: number;
};

//////////////////////////////////UNITS/////////////////////////////////////////////////

export type UnitName = "swordman" | "spearman" | "horseman"; // Add all your unit types here  | "archer" | "knight" | "wizard" | "barbarian"

export type UnitCost = {
  wood: number;
  metal: number;
  foodConsumption: number;
  waterConsumption: number;
};

export type Stats = {
  attack: number;
  defense: number;
  health: number;
  bonusDmg: number;
};

export type Unit = {
  unitType: UnitName; // Storing the name here is redundant if it's the key, but can be useful for type consistency
  amount: number;
  stats: Stats;
  cost: UnitCost;
};

export type Army = Partial<Record<UnitName, Unit>>; // Allows for an army to not have all unit types initially

export type Barracks = {
  buildingName: string;
  level: number;
  trainingTime: number;
  army: Record<string, any>; // Assuming army can be an empty object or have dynamic keys
};

//////////////////////////////////TRADE/////////////////////////////////////////////////

// Define the structure of a single trade route
export type TradeRoute = {
  sender: string | null;
  receiver: string | null;
  resource: ResourceName | null; // Use the ResourceName type here
  percent: number;
};

export type TradeStation = {
  buildingName: string;
  level: number;
  // Based on console, `traders` is not present, removed.
  tradeRouts: TradeRoute[]; // Changed from object to array
};

//////////////////////////////////TOWN/////////////////////////////////////////////////

// --- Town Type ---
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
  status: "village" | "town" | "city" | "megalopolis"; // Added "city"
  isCapital: boolean;
  owner: string;
  buildings: ProductionBuilding[]; // Changed from Buildings object to array directly
  barracks: Barracks;
  tradeStation: TradeStation;
  resources: Resources;
  // If there are other top-level properties not shown in your console log, add them here.
};
