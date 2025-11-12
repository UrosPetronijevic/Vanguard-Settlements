import { usePlayerTownsStore } from "../../../stores/gameplay/playerTownsStore";
import TradeRout from "../../dynamic-content/TradeRout";

export default function TradeActions() {
  const { activeTown } = usePlayerTownsStore();

  return (
    <div className="flex w-full h-full p-2 justify-between">
      {activeTown ? (
        <div className="w-full h-full grid grid-cols-2">
          <div className="flex flex-col justify-between p-2 bg-white h-full">
            <span>Building name : {activeTown?.tradeStation.buildingName}</span>
            <span>Building level : {activeTown?.tradeStation.level}</span>
            <span>Available routs : {activeTown?.tradeStation.level}</span>
          </div>

          <div>
            {activeTown.tradeStation.level === 0
              ? activeTown.tradeStation.tradeRouts.map(
                  (rout: any, i: number) => {
                    return <TradeRout key={i} />;
                  }
                )
              : "No available trade routs, upgrade your trade station first"}
          </div>

          <div></div>
        </div>
      ) : (
        "Select a town first"
      )}
    </div>
  );
}
