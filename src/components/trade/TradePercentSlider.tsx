import { type ChangeEvent } from "react";
import { useTradeRoutPopupStore } from "../../stores/tradeRoutPopupStore";

export default function TradePercentSlider() {
  const { percent, setPercent } = useTradeRoutPopupStore();

  const handleSliderChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPercent(Number(event.target.value));
  };

  console.log(percent);
  return (
    <div className=" mt-4 flex flex-col items-center gap-2">
      <label htmlFor="amount-range" className="text-lg font-medium">
        Amount: {percent}%
      </label>
      <input
        type="range"
        id="amount-range"
        min="0"
        max="100"
        value={percent}
        onChange={handleSliderChange}
        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
      />
    </div>
  );
}
