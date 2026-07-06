import Header from "./Header";
import Content from "./Content";
import React from "react";
import LoginForm from "./LoginForm";
const Login = () => {
  return (
    <div style={{ position: "relative" }}>
      <Header />
      <Content />
      <LoginForm />
    </div>
  );
};
export default Login;
