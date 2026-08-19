import React from "react";
import { movieUrl } from "./utils/constants";

const MovieTile = ({ movie }) => {
  return (
    <img
      className="movieTileImg"
      src={movieUrl + movie.poster_path}
      alt={movie.original_title}
    />
  );
};

export default MovieTile;
