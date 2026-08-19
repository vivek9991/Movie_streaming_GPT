import React from "react";
import { getMovieFromNameUrl, options } from "./utils/constants";
import MovieTile from "./MovieTile";

const MovieResponseContainer = ({ movie }) => {
  const [finalMovie, setFinalMovie] = React.useState(null);
  const getMovie = async () => {
    const movieData = await fetch(getMovieFromNameUrl(movie), options);
    const data = await movieData.json();
    setFinalMovie(data.results[0]);
  };
  React.useEffect(() => {
    getMovie();
  }, [movie]);
  return (
    <div>
      {finalMovie && finalMovie?.poster_path && finalMovie?.original_title && (
        <MovieTile movie={finalMovie} />
      )}
    </div>
  );
};

export default MovieResponseContainer;
