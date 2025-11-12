import { useCallback, useState, useEffect } from "react";
import { usePlayerTownsStore } from "../../stores/gameplay/playerTownsStore";
import { useTradeRoutPopupStore } from "../../stores/tradeRoutPopupStore";

export default function TradeActionsPopup() {
  const { setTradeRoutPopup, setActiveTrade, setTradeReceiver } =
    useTradeRoutPopupStore();

  const { activeTown, towns } = usePlayerTownsStore();

  // State to manage the selected receiver town locally
  const [selectedReceiverTownId, setSelectedReceiverTownId] = useState<
    any | null
  >(null);

  const otherTowns = towns.filter((town) => town.id !== activeTown?.id);

  // Set the first other town as the default selected receiver if available
  useEffect(() => {
    if (otherTowns.length > 0 && !selectedReceiverTownId) {
      setSelectedReceiverTownId(otherTowns[0].id);
    }
  }, [otherTowns, selectedReceiverTownId]);

  // Handle closing the popup
  const handleClose = useCallback(() => {
    setTradeRoutPopup(false);
  }, [setTradeRoutPopup]);

  // Handle change in the select dropdown
  const handleSelectChange = useCallback(
    (event: React.ChangeEvent<HTMLSelectElement>) => {
      setSelectedReceiverTownId(event.target.value);
    },
    []
  );

  // Handle confirming the trade
  const handleConfirm = useCallback(() => {
    const receiverTown = towns.find(
      (town) => town.id === selectedReceiverTownId
    );
    if (receiverTown) {
      setTradeReceiver(receiverTown);
      setActiveTrade(true);
      setTradeRoutPopup(false);
    }
  }, [
    selectedReceiverTownId,
    towns,
    setTradeReceiver,
    setActiveTrade,
    setTradeRoutPopup,
  ]);

  // Early return if activeTown is not defined yet
  if (!activeTown) {
    return null;
  }

  const hasOtherTowns = otherTowns.length > 0;

  return (
    <div className="absolute max-w-screen w-screen max-h-screen h-screen flex items-center justify-center">
      <div className="w-2/3 h-4/5 py-4 px-8 paper-bg shadow-[-7px_9px_6px_4px_rgba(0,_0,_0,_0.3)] rounded-2xl flex flex-col justify-between">
        <div className="w-full flex place-content-end">
          <span className="cursor-pointer text-xl" onClick={handleClose}>
            X
          </span>
        </div>

        <div className="w-full h-1/2 flex items-center justify-center bg-gray-100 mb-4">
          <div className="w-1/2 h-full flex items-center justify-center text-gray-500">
            {/* Placeholder for an image or visual representation */}
            Image or Visual Representation
          </div>
        </div>

        <div className="flex items-center justify-center gap-4 mb-6">
          <span className="font-semibold text-lg">{activeTown.name}</span>

          <span className="text-gray-600 text-2xl">{`--->`}</span>

          <label htmlFor="receiver-town-select" className="sr-only">
            Select Receiver Town
          </label>
          <select
            id="receiver-town-select"
            className="p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            value={selectedReceiverTownId || ""} // Controlled component
            onChange={handleSelectChange}
            disabled={!hasOtherTowns} // Disable if no other towns
          >
            {!hasOtherTowns && (
              <option value="" disabled>
                No other towns available
              </option>
            )}
            {otherTowns.map((town) => (
              <option key={town.id} value={town.id}>
                {town.name}
              </option>
            ))}
          </select>
        </div>
        <button
          className={`p-3 w-fit mx-auto rounded-md text-white font-semibold transition-colors duration-200 ${
            selectedReceiverTownId
              ? "bg-blue-600 hover:bg-blue-700"
              : "bg-gray-400 cursor-not-allowed"
          }`}
          onClick={handleConfirm}
          disabled={!selectedReceiverTownId} // Disable if no town is selected
        >
          Confirm Trade Route
        </button>
      </div>
    </div>
  );
}
