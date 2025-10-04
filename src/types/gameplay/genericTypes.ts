export interface Field {
  id: string;
  x: number;
  y: number;
  type: string;
  img: string;
  owner: string;
}

///////////////////////////////////////////////////

export type Town = {
  id: string;
  name: string;
  type:
    | "Elysium town"
    | "Hills town"
    | "Riverside town"
    | "Lake town"
    | "Jungle town"
    | "Forest town"
    | "Caverns town"
    | "Dune town"
    | "Wasteland town"
    | "Ocean town"
    | "Volcano town";
  coordinates: { x: number; y: number };
  status: "town" | "city" | "megalopolis";
  isCapital: boolean;
  image: string;
  owner: string;
};

///////////////////////////////////////////////////

export type ResidentialArea = {
  info: string;
  level: number;
};

export type Building = {
  name: string;
  level: number;
  isBuilt: boolean;
};

export type TradingPost = Building & {
  info: string;
  traders: number;
  routes: {};
};

export type Barracks = Building & {
  info: string;
};

export type Production = Building & {
  info: string;
  production: number;
};

export type ProductionMultiplier = Building & {
  info: string;
  multiplier: number;
};
