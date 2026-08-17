import React from "react";
import Template from "./Template";
import Browse from "./Browse";
import { createBrowserRouter, RouterProvider } from "react-router";
import Content from "./Content";
import LoginForm from "./LoginForm";

const Body = () => {
  const router = createBrowserRouter([
    {
      id: "template",
      path: "/",
      element: <Template />,
      children: [
        {
          id: "login",
          path: "",
          element: (
            <>
              <Content />
              <LoginForm />
            </>
          ),
        },
        {
          id: "browse",
          path: "/browse",
          element: <Browse />,
        },
        {
          id: "error",
          path: "*",
          element: <Browse />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default Body;
