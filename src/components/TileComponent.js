import React from "react";
import MovieTile from "./MovieTile";

const TileComponent = () => {
  const tileCount = 5;
  return (
    <div style={{ display: "flex" }}>
      {new Array(tileCount).fill("dummyTile").map((tile) => (
        <MovieTile />
      ))}
    </div>
  );
};

export default TileComponent;
