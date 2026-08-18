import React from "react";
import { Link } from "react-router";
import OpenAI from "openai";
// import { REACT_APP_OPENAI_API_KEY } from "./utils/constants";
import { language } from "./utils/language";
import { useSelector } from "react-redux";

const GPTPanel = ({ setOpenGPTPanel }) => {
  const [GPTString, setGPTString] = React.useState("");
  const [responseText, setResponseText] = React.useState("");
  const defaultLanguage = useSelector((store) => store.user.defaultLanguage);
  const asyncFun = async () => {
    try {
      const client = new OpenAI({
        // REACT_APP_OPENAI_API_KEY,
        dangerouslyAllowBrowser: true,
      });
      const response = await client.responses.create({
        model: "gpt-5.6",
        input: GPTString,
      });
      setResponseText(response.output_text);
    } catch {}
  };
  return (
    <div className="dialogBox">
      <input
        className="GPTSearchBox"
        type="text"
        value={GPTString}
        onChange={(e) => setGPTString(e.target.value)}
        placeholder={language?.[defaultLanguage].gptPlaceholder}
      />
      <button className="GPTSearchBtn" onClick={asyncFun}>
        {language?.[defaultLanguage].search}
      </button>
      <Link
        to="/browse"
        className="GPTCloseBtn"
        onClick={() => setOpenGPTPanel(false)}
      >
        {language?.[defaultLanguage].close}
      </Link>
      {responseText && <p className="GPTResponse">{responseText}</p>}
    </div>
  );
};

export default GPTPanel;
