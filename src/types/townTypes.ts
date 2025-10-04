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
