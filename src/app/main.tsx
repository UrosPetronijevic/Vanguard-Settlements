import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./router.tsx";
import Initializer from "../components/auth/Initializer.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Initializer>
      <RouterProvider router={router} />
    </Initializer>
  </StrictMode>
);
