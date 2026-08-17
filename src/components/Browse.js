import React from "react";
import { useNavigate } from "react-router";
import { useMovieList } from "./hooks/useMovieList";
import MainComponent from "./MainComponent";
import ChildComponent from "./ChildComponent";

const Browse = () => {
  const movieList = useMovieList();
  console.log(movieList?.length);
  return (
    <div
      style={{
        position: "absolute",
        top: "0px",
        width: "100%",
        height: "80vh",
      }}
    >
      <MainComponent />
      {/* <ChildComponent /> */}
    </div>
  );
};

export default Browse;
