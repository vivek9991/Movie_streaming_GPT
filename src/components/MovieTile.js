import React from "react";
import { movieUrl } from "./utils/constants";

const MovieTile = ({ movie }) => {
  return (
    <img
      style={{
        height: "250px",
        width: "200px",
        marginRight: "10px",
      }}
      src={movieUrl + movie.poster_path}
      alt={movie.original_title}
    />
  );
};

export default MovieTile;
