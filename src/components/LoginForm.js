import React from "react";
import { Link } from "react-router";

const LoginForm = () => {
  const [signUp, setSignUp] = React.useState(false);
  return (
    <form
      className="loginForm"
      onSubmit={() => {
        alert("form submitted");
      }}
    >
      <div style={{ color: "white", fontSize: "30px" }}>
        {signUp ? "Sign Up" : "Sign In"}
      </div>
      {signUp && (
        <input
          type="text"
          name="name"
          placeholder="Full name"
          className="formInput"
        />
      )}

      <input
        type="text"
        name="loginId"
        placeholder="Email or phone number"
        className="formInput"
      />

      <input
        type="password"
        placeholder="Password"
        name="password"
        className="formInput"
      />
      {signUp && (
        <input
          type="password"
          placeholder="Confirm password"
          name="confirmPassword"
          className="formInput"
        />
      )}
      <button className="signInBtn">{signUp ? "Sign Up" : "Sign In"}</button>
      <div className="formMetadata">
        <span>
          <input type="checkbox" aria-label="Remember me" />
          <span style={{ paddingLeft: "2px" }}>Remember me</span>
        </span>
        <a
          style={{
            color: "rgba(110, 100, 100, 0.826)",
            textDecoration: "none",
          }}
          target="_new"
          href="https://www.google.com"
        >
          Need help?
        </a>
      </div>

      <div style={{ marginTop: "80px" }}>
        <span
          style={{
            color: "rgba(110, 100, 100, 0.826)",
            textDecoration: "none",
          }}
        >
          {signUp ? "Already have a account? " : "New to Netflix? "}
          <span
            onClick={() => setSignUp(!signUp)}
            style={{
              color: "white",
              textDecoration: "none",
              cursor: "pointer",
            }}
          >
            {signUp ? "Sign In." : "Sign up now."}
          </span>
        </span>
      </div>
      <div
        style={{
          color: "rgba(110, 100, 100, 0.826)",
          fontSize: "13px",
          marginTop: "8px",
        }}
      >
        This page is protected by Google reCAPTCHA to ensure you're not a bot.{" "}
        <a
          href="https://www.amazon.com"
          style={{ color: "blue", textDecoration: "none" }}
          target="_new"
        >
          Learn more.
        </a>
      </div>
    </form>
  );
};

export default LoginForm;
