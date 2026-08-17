import React from "react";
import { options } from "./utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { setTrailerId } from "./utils/movieListSlice";
import { useGetTrailerVideo } from "./hooks/useGetTrailerVideo";

const VideoComponent = ({ movieId }) => {
  const trailerId = useGetTrailerVideo(movieId);
  return (
    <iframe
      style={{
        width: "100%",
        aspectRatio: "16/9",
        border: "none",
        marginTop: "-110px",
      }}
      src={`https://www.youtube.com/embed/${trailerId}?autoplay=1&mute=1&loop=1&playlist=${trailerId}&controls=0&rel=0&cc_load_policy=0`}
      title="Movie trailer"
      allow="autoplay; encrypted-media"
      referrerPolicy="strict-origin-when-cross-origin"
    />
  );
};

export default VideoComponent;
