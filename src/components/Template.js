import Header from "./Header";
import React from "react";
import { Outlet } from "react-router";
import Content from "./Content";
const Login = () => {
  return (
    <div style={{ position: "relative" }}>
      <Header />
      <Content />
      <Outlet />
    </div>
  );
};
export default Login;
