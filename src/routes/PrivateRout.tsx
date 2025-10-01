import { Navigate } from "react-router-dom";
import type { ReactNode } from "react";
import useSessionStore from "../stores/sessionStore";
import GameLoadingPage from "../pages/game/GameLoadingPage";

interface PrivateRouteProps {
  children: ReactNode;
  type?: "auth" | "gamescreen" | ""; // Make type optional and specify allowed values for safety
}

export default function PrivateRout({
  children,
  type = "gamescreen",
}: PrivateRouteProps) {
  const { session, isLoading } = useSessionStore();

  if (isLoading) {
    if (type === "auth") {
      return <p>Loading ...</p>;
    } else {
      return <GameLoadingPage />;
    }
  }

  return <>{session ? <>{children}</> : <Navigate to={"/signup"} />}</>;
}
