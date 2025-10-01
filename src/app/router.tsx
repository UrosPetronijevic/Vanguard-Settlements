import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import SignUp from "../pages/auth/SignUp";
import SignIn from "../pages/auth/SignIn";
import Homepage from "../pages/Homepage";
import PrivateRout from "../routes/PrivateRout";
import TownPage from "../pages/game/TownPage";

export const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/signup", element: <SignUp /> },
  { path: "/signin", element: <SignIn /> },
  {
    path: "/homepage",
    element: (
      <PrivateRout type="auth">
        <Homepage />
      </PrivateRout>
    ),
  },

  {
    path: "/townpage",
    element: (
      <PrivateRout>
        <TownPage />
      </PrivateRout>
    ),
  },
]);
