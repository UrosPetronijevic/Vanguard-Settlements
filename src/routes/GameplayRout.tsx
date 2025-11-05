import type { ReactNode } from "react";
import useSessionStore from "../stores/sessionStore";
import GameLoadingPage from "../pages/game/GameLoadingPage";
import { Navigate } from "react-router-dom";
import { useActiveGameSessionStore } from "../stores/gameplay/activeGameSessionStore";

interface GameplayRouteProps {
  children: ReactNode;
  type?: "auth" | "gamescreen" | ""; // Make type optional and specify allowed values for safety
}

export default function GameplayRout({ children }: GameplayRouteProps) {
  const { session, isLoading } = useSessionStore();
  // const { gameSession } = useActiveGameSessionStore();

  if (isLoading) {
    return <GameLoadingPage />;
  }

  if (!session) {
    return <Navigate to={"/signup"} />;
  }

  return <>{session ? <>{children}</> : <Navigate to={"/homepage"} />}</>;
}
