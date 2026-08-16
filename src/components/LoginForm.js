import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router";
import { validateForm } from "./utils/formValidator";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "./utils/firebase";
import { setUserData } from "./utils/UserSlice";

const LoginForm = () => {
  const [signUp, setSignUp] = React.useState(false);
  const [error, setError] = React.useState(null);
  const email = React.useRef(null);
  const password = React.useRef(null);
  const name = React.useRef(null);
  const confirmPassword = React.useRef(null);

  const dispatch = useDispatch();
  return (
    <form
      className="loginForm"
      onSubmit={(e) => {
        e.preventDefault();
        const err = validateForm(
          email.current?.value,
          password.current?.value,
          name.current?.value,
          confirmPassword.current?.value,
        );
        setError(err);
        if (!err) {
          if (signUp) {
            createUserWithEmailAndPassword(
              auth,
              email.current.value,
              password.current.value,
            )
              .then((userCredential) => {
                const user = userCredential.user;
                updateProfile(auth.currentUser, {
                  displayName: name.current?.value,
                });
                dispatch(
                  setUserData({
                    ...auth.currentUser,
                    displayName: name.current?.value,
                  }),
                );
              })
              .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(errorMessage);
              });
          } else {
            //sign in
            signInWithEmailAndPassword(
              auth,
              email.current.value,
              password.current.value,
            ).catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              alert(errorMessage);
            });
          }
        }
      }}
    >
      <div style={{ color: "white", fontSize: "30px" }}>
        {signUp ? "Sign Up" : "Sign In"}
      </div>
      {signUp && (
        <>
          <input
            ref={name}
            type="text"
            name="name"
            placeholder="Full name"
            className="formInput"
          />
          <div style={{ color: "orange", fontSize: "13px" }}>{error?.name}</div>
        </>
      )}

      <input
        ref={email}
        type="text"
        name="loginId"
        placeholder="Email or phone number"
        className="formInput"
      />
      <div style={{ color: "orange", fontSize: "13px" }}>{error?.email}</div>

      <input
        ref={password}
        type="password"
        placeholder="Password"
        name="password"
        className="formInput"
      />
      <div style={{ color: "orange", fontSize: "13px" }}>{error?.password}</div>
      {signUp && (
        <>
          <input
            ref={confirmPassword}
            type="password"
            placeholder="Confirm password"
            name="confirmPassword"
            className="formInput"
          />
          <div style={{ color: "orange", fontSize: "13px" }}>
            {error?.confirmPassword}
          </div>
        </>
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
