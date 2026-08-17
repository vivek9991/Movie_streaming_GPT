import React from "react";
import { GetMovieUrl, options } from "../utils/constants";
import { setMovieList } from "../utils/movieListSlice";
import { useDispatch, useSelector } from "react-redux";
export const useMovieList = () => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    fetch(GetMovieUrl, options)
      .then((res) => res.json())
      .then((json) => dispatch(setMovieList(json.results)))
      .catch((err) => console.error(err));
  }, []);
  const movieList = useSelector((store) => store.movieList.movieList);
  return movieList;
};
