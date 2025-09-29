import { useNavigate } from "react-router-dom";

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="max-w-screen max-h-screen h-screen flex items-center justify-center gap-1">
      <div
        className="bg-amber-300 p-2 border"
        onClick={() => navigate("/signin")}
      >
        Log in
      </div>
      <div
        className="bg-amber-300 p-2 border"
        onClick={() => navigate("/signup")}
      >
        Sign up
      </div>
    </div>
  );
}
