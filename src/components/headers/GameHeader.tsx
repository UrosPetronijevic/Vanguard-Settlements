import { useNavigate } from "react-router-dom";
import { useActiveGameSessionStore } from "../../stores/gameplay/activeGameSessionStore";

export default function GameHeader() {
  const { setGameSession } = useActiveGameSessionStore();

  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-[10%_80%_10%] place-items-center p-3">
      <span>Player ID</span>

      <div className="grid grid-cols-8 place-items-center">
        <p>
          <span>logo</span> stone
        </p>

        <p>
          <span>logo</span> metal
        </p>

        <p>
          <span>logo</span> wood
        </p>

        <p>
          <span>logo</span> glass
        </p>

        <p>
          <span>logo</span> clay
        </p>

        <p>
          <span>logo</span> food
        </p>

        <p>
          <span>logo</span> water
        </p>

        <p>
          <span>logo</span> luxury
        </p>
      </div>

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
