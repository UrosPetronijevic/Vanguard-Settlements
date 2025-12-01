import { usePlayerTownsStore } from "../../stores/gameplay/playerTownsStore";
import { useTradeRoutPopupStore } from "../../stores/tradeRoutPopupStore";
import TradeReceiverSelect from "./TradeReceiverSelect";
import TradeResourceSelect from "./TradeResourceSelect";
import TradePercentSlider from "./TradePercentSlider";
import calculateTownPercent from "../../utils/calculateTownPercent";
import type { ResourceName, Town } from "../../types/townTypes";
import updateTowns from "../../utils/server/updateTowns";

export default function TradeActionsPopup() {
  const {
    setTradeRoutPopup,

    tradeReceiver,
    resource,
    percent,
    routIndex,
  } = useTradeRoutPopupStore();

  const { activeTown, towns, setTowns, setActiveTown } = usePlayerTownsStore();

  //////////////////////////////////////////////////////////////////////////////////////////////////////////

  // Handle closing the popup
  const handleClose = () => {
    setTradeRoutPopup(false);
  };

  ///////////////////////////////////////////////

  // Handle confirming the trade
  const handleConfirm = async () => {
    console.log("ACTIVE TOWN:", activeTown);
    console.log("TRADE RECEIVER:", tradeReceiver);
    console.log("RESOURCE:", resource);
    console.log("PERCENT:", percent);
    // Ensure all necessary values are present before proceeding
    if (
      activeTown &&
      tradeReceiver &&
      resource &&
      percent !== null && // check for null/undefined
      typeof percent === "number"
    ) {
      //////////////////////////////////////
      //OLD RECEIVER TOWN
      let oldReceiverTown: Town | null = null;
      const currentRouteBeingEdited =
        activeTown.tradeStation.tradeRouts[routIndex];

      if (currentRouteBeingEdited && currentRouteBeingEdited.receiver) {
        // Find the town object corresponding to the old receiver ID
        oldReceiverTown =
          towns.find((t) => t.id === currentRouteBeingEdited.receiver) || null;
      }
      /////////////////////////////////////////

      // Calculate the new town states
      const {
        updatedActiveTown,
        updatedTradeReceiver,
        updatedOldReceiverTown,
      } = calculateTownPercent(
        activeTown,
        tradeReceiver, // Cast tradeReceiver to Town if it's guaranteed by previous checks
        resource as ResourceName, // Cast resource to ResourceName
        percent,
        routIndex,
        oldReceiverTown
      );

      console.log(updatedActiveTown, "UPDATED TOWN");
      console.log(updatedTradeReceiver, "UPDATED RECEIVER TOWN");

      await updateTowns(
        updatedActiveTown.id,
        updatedActiveTown.tradeStation,
        updatedActiveTown.resources
      );
      await updateTowns(
        updatedTradeReceiver.id,
        updatedTradeReceiver.tradeStation,
        updatedTradeReceiver.resources
      );
      if (updatedOldReceiverTown) {
        await updateTowns(
          updatedOldReceiverTown.id,
          updatedOldReceiverTown.tradeStation,
          updatedOldReceiverTown.resources
        );
      }

      // Create a NEW towns array with the updated towns
      const newTowns = towns.map((town) => {
        if (town.id === updatedActiveTown.id) {
          return updatedActiveTown;
        }
        if (town.id === updatedTradeReceiver.id) {
          return updatedTradeReceiver;
        }
        if (
          updatedOldReceiverTown !== null &&
          town.id === updatedOldReceiverTown.id
        ) {
          return updatedOldReceiverTown;
        }
        return town; // Return original town if not the ones being updated
      });

      // // Update the global towns state in Zustand
      setTowns(newTowns);

      // IMPORTANT: If activeTown itself was updated, and you want the
      // currently "active" town in the store to reflect these changes
      // immediately for other parts of the UI that might directly use `activeTown`
      // from the store, you should also update `activeTown` in the store.
      // However, if `activeTown` is always picked from `towns` in other components,
      // this might not be strictly necessary, but it's good for consistency.
      setActiveTown(updatedActiveTown);

      // Close the popup and set active trade status
      setTradeRoutPopup(false);
    } else {
      console.warn(
        "Cannot confirm trade: Missing activeTown, tradeReceiver, resource, or percent."
      );
    }
  };

  ///////////////////////////////////////////////

  // Early return if activeTown is not defined yet
  if (!activeTown) {
    return null;
  }

  //////////////////////////////////////////////////////////////////////////////////////////////////////////

  return (
    <div className="absolute max-w-screen w-screen max-h-screen h-screen flex items-center justify-center">
      {"POPUP"}
      <div className="w-2/3 h-4/5 py-4 px-8 paper-bg shadow-[-7px_9px_6px_4px_rgba(0,_0,_0,_0.3)] rounded-2xl flex flex-col justify-between">
        <div className="w-full flex place-content-end">
          <span className="cursor-pointer text-xl" onClick={handleClose}>
            X
          </span>
        </div>

        <div className="w-full h-1/2 flex items-center justify-center bg-gray-100 mb-4">
          <div className="w-1/2 h-full flex items-center justify-center text-gray-500">
            Image or Visual Representation
          </div>
        </div>

        <div className="flex flex-col items-center justify-center gap-4 ">
          <div className="flex w-full items-center justify-between">
            <span className="font-semibold text-lg">{activeTown.name}</span>

            <span className="text-gray-600 text-2xl">{`--->`}</span>

            <TradeReceiverSelect />

            <TradeResourceSelect />

            <TradePercentSlider />
          </div>
        </div>

        <button
          className={`p-3 w-fit mx-auto rounded-md text-white font-semibold transition-colors duration-200`}
          onClick={handleConfirm}
          disabled={
            percent === null || resource === null || tradeReceiver === null
          }
        >
          Confirm Trade Route
        </button>
      </div>
    </div>
  );
}
