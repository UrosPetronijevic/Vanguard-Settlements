import type { Town, Field, Production, ResidentialArea } from "./genericTypes";

///////////////FIELD//////////////
export interface Riverside extends Field {}

///////////////TOWN///////////////
export type RiversideTown = Town & {
  buildings: {
    residentialArea: ResidentialArea;

    fishery1: Production;
    fishery2: Production;

    aquaExtractor1: Production;
    aquaExtractor2: Production;

    woodcutter: Production;
    clayExtractionStation: Production;
    stoneExtractionStation: Production;
  };
};
