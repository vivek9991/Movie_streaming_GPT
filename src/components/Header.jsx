import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router";
import { setUserData, toggleLanguage } from "./utils/UserSlice";
import { signOut } from "firebase/auth";
import { auth } from "./utils/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { languageType, LOGO, supportedLanguages } from "./utils/constants";
import GPTPanel from "./GPTPanel";
import { language } from "./utils/language";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userData = useSelector((store) => store.user.user);
  const defaultLanguage = useSelector((store) => store.user.defaultLanguage);
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

  const [openGPTPanel, setOpenGPTPanel] = React.useState(false);
  return (
    <>
      <img
        style={{ zIndex: 100 }}
        className="netflixLogo"
        src={LOGO}
        alt="netflixlogo"
      />
      <div
        style={{
          position: "absolute",
          color: "white",
          right: "20px",
          top: "20px",
          display: "flex",
          zIndex: 100,
        }}
      >
        {userData && !openGPTPanel && (
          <>
            <Link
              style={{
                color: "white",
                textDecoration: "none",
                cursor: "pointer",
                marginRight: "10px",
              }}
              to="/browse"
              onClick={() => setOpenGPTPanel(true)}
            >
              GPT Search
            </Link>
          </>
        )}
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
        {openGPTPanel && (
          <select
            onChange={(e) => dispatch(toggleLanguage(e.target.value))}
            style={{
              backgroundColor: "transparent",
              color: "white",
              border: "1px solid white",
              borderRadius: "10px",
              marginLeft: "15px",
              marginTop: "-5px",
              padding: "5px",
            }}
          >
            {supportedLanguages.map((languageOption) => (
              <option key={languageOption.value} value={languageOption.value}>
                {languageOption.label}
              </option>
            ))}
          </select>
        )}
        {userData && openGPTPanel && (
          <GPTPanel setOpenGPTPanel={setOpenGPTPanel} />
        )}
      </div>
    </>
  );
};

export default Header;
