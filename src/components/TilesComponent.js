import React from "react";
import MovieTile from "./MovieTile";
import { useDispatch, useSelector } from "react-redux";
import { setMovieList } from "./utils/movieListSlice";
import { useMovieList } from "./hooks/useMovieList";
import { options } from "./utils/constants";

const TilesComponent = ({ category }) => {
  const [movieList, setMovieList] = React.useState(null);
  React.useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${category}?language=en-US&page=1`,
      options,
    )
      .then((res) => res.json())
      .then((json) => setMovieList(json.results))
      .catch((err) => console.error(err));
  }, []);
  return (
    <div style={{ color: "white", display: "flex", overflow: "scroll" }}>
      {movieList?.map((movie) => (
        <MovieTile key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default TilesComponent;
