import { usePlayerTownsStore } from "../../../../stores/gameplay/playerTownsStore";

export default function TownInfo() {
  const { activeTown } = usePlayerTownsStore();

  if (!activeTown) {
    return (
      <div className="text-center p-4 text-gray-400">
        Select a town from the list to see its details.
      </div>
    );
  }

  return (
    <div className="w-1/2 bg-lime-900/50 p-4 rounded-lg shadow-inner">
      <h4 className="text-xl font-bold mb-3 text-yellow-300 flex items-center justify-between">
        {activeTown.name}
        {activeTown.isCapital && (
          <span className="text-xs bg-yellow-400 text-black px-2 py-1 rounded-full ml-2">
            Capital
          </span>
        )}
      </h4>
      <div className="flex flex-col gap-1 text-gray-200">
        <p>
          <span className="font-semibold">Type:</span> {activeTown.type}
        </p>
        <p>
          <span className="font-semibold">Coordinates:</span> (
          {activeTown.coordinates.x}, {activeTown.coordinates.y})
        </p>
        <p>
          <span className="font-semibold">Status:</span>
          <span
            className={`
              px-2 py-0.5 rounded-full text-xs font-medium
              ${
                activeTown.status === "megalopolis"
                  ? "bg-purple-600"
                  : activeTown.status === "city"
                  ? "bg-blue-600"
                  : "bg-green-600"
              }
            `}
          >
            {activeTown.status.charAt(0).toUpperCase() +
              activeTown.status.slice(1)}
          </span>
        </p>
        <p>
          <span className="font-semibold">Owner:</span> {activeTown.owner}
        </p>
      </div>
    </div>
  );
}
