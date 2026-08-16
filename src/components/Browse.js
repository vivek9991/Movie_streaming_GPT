import React from "react";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { GetMovieUrl, options } from "./utils/constants";
import { setMovieList } from "./utils/movieListSlice";

const Browse = () => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    fetch(GetMovieUrl, options)
      .then((res) => res.json())
      .then((json) => dispatch(setMovieList(json.results)))
      .catch((err) => console.error(err));
  }, []);

  const movieList = useSelector((store) => store.movieList.movieList);
  console.log(movieList?.length);
  return <div style={{ color: "blue", zIndex: 100 }}>{movieList?.length}</div>;
};

export default Browse;
