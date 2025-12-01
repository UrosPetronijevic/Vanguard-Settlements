import { usePlayerTownsStore } from "../../stores/gameplay/playerTownsStore";
import TownInfo from "./TownInfo";
import TownNames from "./TownNames";

export default function TownList() {
  const isLoading = usePlayerTownsStore((state) => state.isLoading);
  const error = usePlayerTownsStore((state) => state.error);

  if (isLoading) {
    return <div className="text-center p-4 text-white">Loading towns...</div>;
  }

  if (error) {
    return <div className="text-center p-4 text-red-400">Error: {error}</div>;
  }

  return (
    <div className="flex w-full p-2">
      <div className="p-2  shadow-lg overflow-y-auto custom-scrollbar w-[20%]">
        <TownNames />
      </div>

      <div className="w-full flex items-center justify-center">
        <TownInfo />
      </div>
    </div>
  );
}
