import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { options } from "../utils/constants";
import { setTrailerId } from "../utils/movieListSlice";

export const useGetTrailerVideo = (movieId) => {
  const url = `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`;

  const dispatch = useDispatch();
  const trailerId = useSelector((store) => store.movieList.trailerId);

  const getMovie = async () => {
    const response = await fetch(url, options);
    const data = await response.json();
    const trailers = data.results.filter(
      (result) => result.type === "Trailer" && result.site === "YouTube",
    );
    const trailer = trailers.length ? trailers[0] : data[0];
    dispatch(setTrailerId(trailer?.key));
  };

  React.useEffect(() => {
    getMovie();
  }, [movieId]);
  return trailerId;
};
