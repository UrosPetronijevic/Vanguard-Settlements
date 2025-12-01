import { usePlayerTownsStore } from "../../stores/gameplay/playerTownsStore";
import type { Town } from "../../types/townTypes";

export default function TownNames() {
  const { towns, activeTown, setActiveTown } = usePlayerTownsStore();

  if (towns.length === 0) {
    return (
      <div className="text-center p-4 text-gray-400">
        No towns found. Start building your empire!
      </div>
    );
  }

  return (
    <div className="w-full">
      <h4 className="text-lg font-bold text-center mb-2 text-yellow-300">
        Your Towns
      </h4>
      <ul className="space-y-1">
        {towns.map((town: Town) => (
          <li
            key={town.id}
            className={`
              p-2 rounded-md cursor-pointer transition-all duration-150 ease-in-out
              transform 
              ${
                activeTown?.id === town.id
                  ? "bg-lime-700/70 text-yellow-100 ring-2 ring-yellow-400 shadow-md" // Use ring for active state
                  : "bg-lime-900/40 text-gray-200 hover:bg-lime-800/60 hover:scale-[1.02]" // Subtle hover scale
              }
            `}
            onClick={() => setActiveTown(town)}
          >
            {town.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
