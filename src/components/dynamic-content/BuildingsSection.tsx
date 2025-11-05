import { usePlayerTownsStore } from "../../stores/gameplay/playerTownsStore";
import type { ProductionBuilding } from "../../types/townTypes";

export default function BuildingsSection() {
  const { towns, activeTownId } = usePlayerTownsStore();
  const activeTown = towns.find((town) => town.id === activeTownId);

  const getBuildingName = (building: ProductionBuilding) => {
    switch (building.buildingName) {
      case "Western Silo":
        return "";
      case "Eastern Silo":
        return "";
      case "Western Watter Mill":
        return "";
      case "Eastern Watter Mill":
        return "";
      case "West Harvesters Lodge":
        return "";
      case "East Harvesters Lodge":
        return "";
      case "Downtown Bakery":
        return "";
      case "Riverside Bakery":
        return "";
      case "Bazar Bakery":
        return "";
      case "Barracks":
        return "";
      default: // This case should ideally not be reached if TownType is exhaustive
    }
  };

  return (
    <div className="bg-red-50 w-2/5 grid grid-cols-3 gap-2">
      {activeTown?.buildings.production.map((building, i) => (
        <div key={i}>
          <img src={`${getBuildingName}`} />
          <p className="flex justify-between px-2">
            <span>{building?.buildingName}</span>
            <span className="h-7 w-7 font-bold text-center bg-cyan-50">
              {building?.level}
            </span>
          </p>
        </div>
      ))}
    </div>
  );
}
