import GameMapPreview from "./GameMapPreview";
import MapPreviewCard from "./MapPreviewCard";

export default function MapsGrid() {
  return (
    <div className="h-3/4 grid grid-cols-3 place-items-center gap-4">
      <MapPreviewCard size={"10x10"}>
        <GameMapPreview />
      </MapPreviewCard>

      <MapPreviewCard size={"100x100"}>
        <GameMapPreview />
      </MapPreviewCard>

      <MapPreviewCard size={"1000x1000"}>
        <GameMapPreview />
      </MapPreviewCard>
    </div>
  );
}
