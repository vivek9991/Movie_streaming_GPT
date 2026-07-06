import React from "react";
import Login from "./Login";
import Browse from "./Browse";
import { createBrowserRouter, RouterProvider } from "react-router";

const Body = () => {
  const router = createBrowserRouter([
    {
      id: "login",
      path: "/",
      element: <Login />,
    },
    {
      id: "browse",
      path: "/browse",
      element: <Browse />,
    },
  ]);
  return <RouterProvider router={router} />;
};

export default Body;
