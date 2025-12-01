import { useActiveBuildingStore } from "../../stores/activeBuildingStore";

export default function BuildingPopup() {
  const { activeBuilding } = useActiveBuildingStore();

  return (
    <div className="absolute max-w-screen w-screen max-h-screen h-screen flex items-center justify-center">
      <div className="w-2/3 h-4/5 py-4 px-8 paper-bg shadow-[-7px_9px_6px_4px_rgba(0,_0,_0,_0.3)] rounded-2xl ">
        <div className="w-full flex place-content-end">
          <span>X</span>
        </div>
      </div>
    </div>
  );
}
