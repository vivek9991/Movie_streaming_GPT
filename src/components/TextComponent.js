import React from "react";

const TextComponent = ({ mainMovie }) => {
  return (
    <div
      style={{
        width: "93%",
        position: "absolute",
        background: "linear-gradient(to right, black, transparent)",
      }}
      className="trailerText"
    >
      <h1 className="trailerTitle " style={{ color: "white" }}>
        {mainMovie.original_title}
      </h1>
      <p
        className="trailerDesc"
        style={{
          color: "white",
          marginTop: "10px",
          marginBottom: "15px",
          width: "40vw",
          fontSize: "20px",
        }}
      >
        {mainMovie.overview}
      </p>
      <button
        onClick={() => prompt("hi")}
        className="mainMovieBtn"
        style={{ backgroundColor: "white", color: "black" }}
      >
        ▶️ Play
      </button>
      <button onClick={() => prompt("hi")} className="mainMovieBtn">
        ℹ️ More info
      </button>
    </div>
  );
};

export default TextComponent;
