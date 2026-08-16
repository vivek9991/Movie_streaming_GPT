import React from "react";
import { CONTENT_IMG } from "./utils/constants";

const Content = () => {
  return (
    <div>
      <img className="homeImage" src={CONTENT_IMG} alt="home image" />
    </div>
  );
};

export default Content;
