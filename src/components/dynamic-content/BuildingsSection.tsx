import { useActiveBuildingStore } from "../../stores/activeBuildingStore";
import { usePlayerTownsStore } from "../../stores/gameplay/playerTownsStore";
import type { ProductionBuilding } from "../../types/townTypes";

export default function BuildingsSection() {
  const { activeTown } = usePlayerTownsStore();

  const { setActiveBuilding } = useActiveBuildingStore();

  console.log(activeTown, "active Town");

  const getBuildingImg = (building: ProductionBuilding) => {
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
    <div className="bg-red-50 w-3/5 grid grid-cols-3 gap-2">
      {activeTown?.buildings?.map((building: any, i: number) => (
        <div
          key={i}
          onClick={() => {
            setActiveBuilding(building);
          }}
        >
          <img src={`${getBuildingImg(building)}`} />
          <p className="flex justify-between px-2">
            <span>{building?.buildingName}</span>
            <span className="h-7 w-7 font-bold text-center bg-cyan-50 cursor-pointer">
              {building?.level}
            </span>

            <span className="h-7 w-7 font-bold text-center bg-cyan-50 cursor-pointer">
              +
            </span>
          </p>
        </div>
      ))}
    </div>
  );
}
