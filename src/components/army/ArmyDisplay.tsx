import { usePlayerTownsStore } from "../../stores/gameplay/playerTownsStore";
import { useUnitPopupStore } from "../../stores/unitPopupStore";

export default function ArmyDisplay() {
  const { activeTown } = usePlayerTownsStore();
  const { setUnitpopup } = useUnitPopupStore();

  return (
    <div className="flex flex-col justify-between">
      <ul className="">
        {activeTown?.barracks.army.swordman.amount > 0 ? (
          <li>
            <span>{activeTown?.barracks.army.swordman.unitType}</span>
            <span>{activeTown?.barracks.army.swordman.amount}</span>
            <span>swordman logo</span>
          </li>
        ) : (
          ""
        )}

        {activeTown?.barracks.army.spearman.amount > 0 ? (
          <li>
            <span>{activeTown?.barracks.army.spearman.unitType}</span>
            <span>{activeTown?.barracks.army.spearman.amount}</span>
            <span>spearman logo</span>
          </li>
        ) : (
          <li>YOUR AMY IS DJIRO</li>
        )}

        {activeTown?.barracks.army.horseman.amount > 0 ? (
          <li>
            <span>{activeTown?.barracks.army.horseman.unitType}</span>
            <span>{activeTown?.barracks.army.horseman.amount}</span>
            <span>horseman logo</span>
          </li>
        ) : (
          ""
        )}
      </ul>
      <div className="flex items-center justify-center w-full">
        <button
          className="p-2 bg-red-200"
          onClick={() => {
            setUnitpopup(true);
          }}
        >
          Recruit new units
        </button>
      </div>
    </div>
  );
}
