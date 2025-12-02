// src/main.jsx
import React from "react";
import { createRoot } from "react-dom/client";
import './index.css'
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import App from "./App";
import ViewStory from "./viewStory";
import Profile from "./Profile";


const router = createBrowserRouter(
  [
    {
      path:'/',
      element: <App />
    },
    {
      path:'/story/:id/:totalid',
      element:<ViewStory/>
    },
    {
      path:'/Profile',
      element:<Profile/>
    }

  ]
)


const root = createRoot(document.getElementById("root"));
root.render(
  <RouterProvider router={router}></RouterProvider>
);