import type {
  Town,
  Field,
  ProductionMultiplier,
  Production,
  TradingPost,
  Barracks,
  ResidentialArea,
} from "./genericTypes";

///////////////FIELD//////////////
export interface Volcano extends Field {}

///////////////TOWN///////////////
export type VolcanoTown = Town & {
  buildings: {
    residentialArea: ResidentialArea;

    stoneMine: Production;
    stoneExtractor: Production;
    metalExtractor1: Production;
    metalExtractor2: Production;

    metalProcessor1: ProductionMultiplier;
    metalProcessor2: ProductionMultiplier;

    weaponSmith1: ProductionMultiplier;
    weaponSmith2: ProductionMultiplier;

    tradingPost1: TradingPost;
    tradingPost2: TradingPost;
    tradingPost3: TradingPost;

    barracks: Barracks;
  };
};
