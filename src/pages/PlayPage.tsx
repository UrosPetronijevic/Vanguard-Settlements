import MapsGrid from "../components/maps/MapsGrid";

export default function PlayPage() {
  return (
    <div className="h-full flex flex-col items-center p-4">
      <div className="p-2 flex gap-2 border rounded-md">
        <div>singleplayer</div>
        <div>multiplayer</div>
      </div>

      <MapsGrid />

      <button className="border shadow-md bg-green-50 py-2 mt-4 px-8 text-4xl rounded-md">
        Generate map
      </button>
    </div>
  );
}
