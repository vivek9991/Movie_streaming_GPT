import React from "react";

const TextComponent = ({ mainMovie }) => {
  return (
    <div
      style={{
        paddingLeft: "100px",
        width: "93%",
        aspectRatio: "16/9",
        position: "absolute",
        top: "0px",
        background: "linear-gradient(to right, black, transparent)",
      }}
    >
      <h1 style={{ paddingTop: "35vh", color: "white" }}>
        {mainMovie.original_title}
      </h1>
      <p
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
