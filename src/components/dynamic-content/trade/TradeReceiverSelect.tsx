import { type ChangeEvent } from "react";
import { usePlayerTownsStore } from "../../../stores/gameplay/playerTownsStore";
import { useTradeRoutPopupStore } from "../../../stores/tradeRoutPopupStore";

export default function TradeReceiverSelect() {
  /////////////////////////////////

  const { activeTown, towns } = usePlayerTownsStore();

  const { tradeReceiver, setTradeReceiver } = useTradeRoutPopupStore();

  const otherTowns = towns.filter((town) => town.id !== activeTown?.id);

  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const town = otherTowns.find((town: any) => town.id === event.target.value);
    setTradeReceiver(town);
  };

  console.log(tradeReceiver);

  /////////////////////////////////

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor="receiver-town-select">Select Receiver Town</label>
      <select
        id="receiver-town-select"
        className="p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none"
        value={tradeReceiver?.id}
        onChange={handleSelectChange}
      >
        {otherTowns.map((town: any) => (
          <option key={town.id} value={town.id}>
            {town.name}
          </option>
        ))}
      </select>
    </div>
  );
}
