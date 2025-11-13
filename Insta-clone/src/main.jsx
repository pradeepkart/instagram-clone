// src/main.jsx
import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.jsx";
import ViewStory from "./viewStory.jsx";
import "./index.css";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/story", element: <ViewStory /> }
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);