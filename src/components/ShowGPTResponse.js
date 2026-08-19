import React from "react";
import MovieResponseContainer from "./MovieResponseContainer";

const ShowGPTResponse = ({ responseText }) => {
  return (
    <div
      style={{
        display: "flex",
        overflow: "scroll",
        padding: "40px",
        marginTop: "70px",
      }}
    >
      {responseText?.split(",").map((movie) => (
        <MovieResponseContainer movie={movie} />
      ))}
    </div>
  );
};

export default ShowGPTResponse;
