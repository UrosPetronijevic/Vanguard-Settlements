import MapsGrid from "../../components/maps/MapsGrid";
import { useNavigate } from "react-router-dom";
import { useActiveGameSessionStore } from "../../stores/gameplay/activeGameSessionStore";
import { useMapFieldsStore } from "../../stores/gameplay/mapFieldsStore";
import createMap from "../../utils/createMap";

export default function PlayPage() {
  const { setGameSession } = useActiveGameSessionStore();

  const { setMapFields } = useMapFieldsStore();

  const navigate = useNavigate();

  return (
    <div className="h-full flex flex-col items-center p-4">
      <div className="p-2 flex gap-2 border rounded-md">
        <div>singleplayer</div>
        <div>multiplayer</div>
      </div>

      <MapsGrid />

      <button
        className="border shadow-md bg-green-50 py-2 mt-4 px-8 text-4xl rounded-md"
        onClick={() => {
          setGameSession(true);
          setMapFields(createMap());
          navigate("/townpage");
        }}
      >
        Generate map
      </button>
    </div>
  );
}
