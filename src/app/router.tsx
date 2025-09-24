import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import SignUp from "../pages/auth/SignUp";
import SignIn from "../pages/auth/SignIn";

export const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/signup", element: <SignUp /> },
  { path: "/signin", element: <SignIn /> },
  //   {
  //     path: "/dashboard",
  //     element: (
  //       <PrivateRout>
  //         <Dashboard />
  //       </PrivateRout>
  //     ),
  //   },
]);
