import { useTradeRoutPopupStore } from "../../stores/tradeRoutPopupStore";

export default function TradeRout() {
  const { setTradeRoutPopup, activeTrade } = useTradeRoutPopupStore();

  // Filter out the activeTown itself from the list of selectable towns

  return (
    <div className="w-full flex justify-between p-4 items-center">
      {!activeTrade ? (
        <>
          <span>Create a new trade rout:</span>
          <button
            className="p-2 bg-slate-700 disabled:opacity-50 disabled:cursor-not-allowed" // Added disabled styles
            onClick={() => {
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
    </div>
  );
}
