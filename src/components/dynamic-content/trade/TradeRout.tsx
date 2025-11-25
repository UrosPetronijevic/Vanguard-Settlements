import { usePlayerTownsStore } from "../../../stores/gameplay/playerTownsStore";
import { useTradeRoutPopupStore } from "../../../stores/tradeRoutPopupStore";
import deleteTradeRout from "../../../utils/deleteTradeRout";
import updateTowns from "../../../utils/server/updateTowns";

type TradeRoutProps = {
  index: number;
};

export default function TradeRout({ index }: TradeRoutProps) {
  const { setTradeRoutPopup, activeTrade, setRoutIndex } =
    useTradeRoutPopupStore();

  const { activeTown, towns, setActiveTown, setTowns } = usePlayerTownsStore();

  // Filter out the activeTown itself from the list of selectable towns

  const handleDeleteRoute = async (routIndexToDelete: number) => {
    if (!activeTown || !towns) {
      console.warn(
        "Cannot delete route: Active town or towns data not available."
      );
      return;
    }

    const { updatedActiveTown, updatedReceiverTown } = deleteTradeRout(
      activeTown,
      routIndexToDelete,
      towns // Pass the full towns array to find the receiver
    );

    // --- Update Database ---
    await updateTowns(
      updatedActiveTown.id,
      updatedActiveTown.tradeStation,
      updatedActiveTown.resources
    );

    if (updatedReceiverTown) {
      await updateTowns(
        updatedReceiverTown.id,
        updatedReceiverTown.tradeStation,
        updatedReceiverTown.resources
      );
    }

    // --- Update Local Zustand State ---
    const newTowns = towns.map((town) => {
      if (town.id === updatedActiveTown.id) {
        return updatedActiveTown;
      }
      if (updatedReceiverTown && town.id === updatedReceiverTown.id) {
        return updatedReceiverTown;
      }
      return town;
    });

    setTowns(newTowns);
    setActiveTown(updatedActiveTown); // Update activeTown if it was modified

    // Close popup or give feedback
    // setTradeRoutPopup(false); // If this delete happens in a popup context
  };

  const routeExists = activeTown?.tradeStation.tradeRouts[index] !== undefined;

  return (
    <div className="w-full flex justify-between p-4 items-center">
      {!activeTrade ? (
        <>
          <span>Create a new trade rout:</span>
          <button
            className="p-2 bg-slate-700 disabled:opacity-50 disabled:cursor-not-allowed" // Added disabled styles
            onClick={() => {
              setRoutIndex(index);
              setTradeRoutPopup(true);
            }}
          >
            Create rout
          </button>
        </>
      ) : (
        <>
          <span>Active rout:</span>
          <button
            className="p-2 bg-slate-700 disabled:opacity-50 disabled:cursor-not-allowed" // Added disabled styles
            onClick={() => {
              setTradeRoutPopup(true);
            }}
          >
            Update rout
          </button>
        </>
      )}

      {activeTown.tradeStation.tradeRouts[index].receiver !== null ? (
        <button
          className="p-2 bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed"
          onClick={() => {
            handleDeleteRoute(index); // <--- CORRECTED: Call the function with 'index'
          }}
          disabled={!routeExists} // Disable if no route exists at this index
        >
          Delete rout
        </button>
      ) : (
        ""
      )}
    </div>
  );
}
