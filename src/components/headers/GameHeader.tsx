import { useNavigate } from "react-router-dom";
import { useActiveGameSessionStore } from "../../stores/gameplay/activeGameSessionStore";
import ResourcesDisplay from "../ResourcesDisplay";

export default function GameHeader() {
  const { setGameSession } = useActiveGameSessionStore();

  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-[10%_80%_10%] place-items-center p-3">
      <span>Player ID</span>

      <ResourcesDisplay />

      <button
        className=""
        onClick={() => {
          setGameSession(false);
          navigate("/homepage");
        }}
      >
        Quit game
      </button>
    </div>
  );
}
