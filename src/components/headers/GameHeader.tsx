import { useNavigate } from "react-router-dom";
import { useActiveGameSessionStore } from "../../stores/gameplay/activeGameSessionStore";

export default function GameHeader() {
  const { setGameSession } = useActiveGameSessionStore();

  const navigate = useNavigate();

  return (
    <div className="flex justify-between p-3">
      <span>Player ID</span>

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
