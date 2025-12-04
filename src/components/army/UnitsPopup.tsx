import { usePlayerTownsStore } from "../../stores/gameplay/playerTownsStore";
import { useUnitPopupStore } from "../../stores/unitPopupStore";
import Unit from "./units/Unit";

export default function UnitsPopup() {
  const { setUnitpopup } = useUnitPopupStore();
  const { activeTown } = usePlayerTownsStore();

  const handleClose = () => {
    setUnitpopup(false);
  };

  const availableUnits = activeTown?.barracks?.army
    ? Object.values(activeTown.barracks.army)
    : [];

  console.log(availableUnits, "availableUnits");

  return (
    <div className="absolute max-w-screen w-screen max-h-screen h-screen flex items-center justify-center z-50">
      <div className="w-2/3 h-4/5 py-4 px-8 paper-bg shadow-[-7px_9px_6px_4px_rgba(0,_0,_0,_0.3)] rounded-2xl flex flex-col justify-between">
        <div className="w-full flex justify-end">
          <span className="cursor-pointer text-xl" onClick={handleClose}>
            X
          </span>
        </div>

        {/* This is the scrollable content area */}
        <div className="flex-grow overflow-y-auto pr-2">
          {/* Your content goes here. It will scroll if it overflows */}
          <div className="h-full">
            <h2 className="text-2xl font-bold mb-6 text-center">
              Available Units
            </h2>
            {availableUnits.length > 0 ? (
              availableUnits.map((unit) => (
                <Unit key={unit.unitType} unitData={unit} />
              ))
            ) : (
              <p className="text-center text-gray-500">
                No units available in barracks.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
