import { usePlayerTownsStore } from "../../../stores/gameplay/playerTownsStore";
import TownInfo from "./town-list-content/TownInfo";
import TownNames from "./town-list-content/TownNames";

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
    <div className="flex flex-col h-full w-full p-2 gap-4">
      <div className="bg-lime-900/60 p-3 rounded-lg shadow-lg flex-none max-h-[35%] overflow-y-auto custom-scrollbar">
        <TownNames />
      </div>

      <div className="flex-none">
        <TownInfo />
      </div>
    </div>
  );
}
