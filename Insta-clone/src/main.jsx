// src/main.jsx
import React from "react";
import { createRoot } from "react-dom/client";
import './index.css'
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import App from "./App";
import ViewStory from "./viewStory";


const router = createBrowserRouter(
  [
    {
      path:'/',
      element: <App />
    },
    {
      path:'/story/:id',
      element:<ViewStory/>
    }

  ]
)


const root = createRoot(document.getElementById("root"));
root.render(
  <RouterProvider router={router}></RouterProvider>
);