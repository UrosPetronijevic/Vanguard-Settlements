import type {
  Town,
  Field,
  ProductionMultiplier,
  Production,
  ResidentialArea,
} from "./genericTypes";

///////////////FIELD//////////////
export interface ElysianFields extends Field {}

///////////////TOWN///////////////
export type ElysiumTown = Town & {
  buildings: {
    residentialArea: ResidentialArea;

    wheatHarvestersLodge1: Production;
    wheatHarvestersLodge2: Production;
    wheatHarvestersLodge3: Production;

    aquaExtractor1: Production;
    aquaExtractor2: Production;

    silo1: ProductionMultiplier;
    silo2: ProductionMultiplier;

    waterMill1: ProductionMultiplier;
    waterMill2: ProductionMultiplier;

    windMill1: ProductionMultiplier;
    windMill2: ProductionMultiplier;

    bakery1: ProductionMultiplier;
    bakery2: ProductionMultiplier;
  };
};
