import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router";
import { setUserData } from "./utils/UserSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userData = useSelector((store) => store.user.user?.displayName);
  return (
    <>
      <img
        className="netflixLogo"
        src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2026-05-14/consent/87b6a5c0-0104-4e96-a291-092c11350111/019ae4b5-d8fb-7693-90ba-7a61d24a8837/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="netflixlogo"
      />
      <div
        style={{
          position: "absolute",
          color: "white",
          right: "20px",
          top: "20px",
          display: "flex",
        }}
      >
        {userData}
        {userData && (
          <div
            style={{
              textDecoration: "none",
              cursor: "pointer",
              paddingLeft: "20px",
            }}
            onClick={() => {
              dispatch(setUserData(null));
              navigate("/");
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
