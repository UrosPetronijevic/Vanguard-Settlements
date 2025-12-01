import { usePlayerTownsStore } from "../../stores/gameplay/playerTownsStore";

export default function BarracksInfo() {
  const { activeTown } = usePlayerTownsStore();

  return (
    <div className="flex flex-col justify-between">
      <p>
        Barracks type: <span>{activeTown?.barracks.buildingName}</span>
      </p>
      <p>
        Barracks level: <span>{activeTown?.barracks.level}</span>
      </p>
      <p>
        Unit training speed modifier:
        <span className="ml-2">{activeTown?.barracks.trainingTime}</span>
      </p>
    </div>
  );
}
