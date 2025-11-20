// TradeResourceSelect.tsx (no changes needed to this file after store fix)
import { type ChangeEvent } from "react";
import { useTradeRoutPopupStore } from "../../../stores/tradeRoutPopupStore";

const RESOURCES = ["water", "wood", "food", "clay", "sand", "stone", "metal"];

export default function TradeResourceSelect() {
  const { resource, setResource } = useTradeRoutPopupStore();

  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    // Set to null if the placeholder is selected, otherwise set the resource string
    setResource(selectedValue === "" ? null : selectedValue);
  };

  console.log(resource);

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor="resource-select-id">Select Resource:</label>
      <select
        id="resource-select-id"
        value={resource || ""}
        onChange={handleSelectChange}
        className="block w-fit p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none"
      >
        <option value="" disabled>
          Select a resource
        </option>
        {RESOURCES.map((res) => (
          <option key={res} value={res}>
            {res}
          </option>
        ))}
      </select>
    </div>
  );
}
