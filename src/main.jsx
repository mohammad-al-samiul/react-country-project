import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import router from "./routes/index.jsx";
import { RouterProvider } from "react-router-dom";
import { Toaster } from "sonner";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Toaster position="top-center" />
    <RouterProvider router={router} />
  </StrictMode>
);
