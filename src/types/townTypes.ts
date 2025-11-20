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

export type Barracks = {
  buildingName: string;
  level: number;
  trainingTime: number;
  army: Record<string, any>; // Assuming army can be an empty object or have dynamic keys
};

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
