import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router";
import { setUserData } from "./utils/UserSlice";
import { signOut } from "firebase/auth";
import { auth } from "./utils/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { LOGO } from "./utils/constants";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userData = useSelector((store) => store.user.user);
  React.useEffect(() => {
    const unsubsribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(setUserData({ displayName: user?.displayName }));
        navigate("/browse");
      } else {
        dispatch(setUserData(null));
        navigate("/");
      }
    });
    return () => unsubsribe();
  }, []);
  return (
    <>
      <img className="netflixLogo" src={LOGO} alt="netflixlogo" />
      <div
        style={{
          position: "absolute",
          color: "white",
          right: "20px",
          top: "20px",
          display: "flex",
        }}
      >
        {userData?.displayName}
        {userData && (
          <div
            style={{
              textDecoration: "none",
              cursor: "pointer",
              paddingLeft: "20px",
            }}
            onClick={() => {
              dispatch(setUserData(null));
              signOut(auth);
            }}
          >
            Sign out
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
