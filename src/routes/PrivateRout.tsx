import { Navigate } from "react-router-dom";
import type { ReactNode } from "react";
import useSessionStore from "../stores/sessionStore";

interface PrivateRouteProps {
  children: ReactNode;
}

export default function PrivateRout({ children }: PrivateRouteProps) {
  const { session, isLoading } = useSessionStore();

  if (isLoading) {
    return <p>Loading ...</p>;
  }

  return <>{session ? <>{children}</> : <Navigate to={"/signup"} />}</>;
}
