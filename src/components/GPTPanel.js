import React, { useRef } from "react";
import { Link } from "react-router";
import { Groq } from "groq-sdk";
import { query } from "./utils/constants";
import { language } from "./utils/language";
import { useSelector } from "react-redux";
import ShowGPTResponse from "./ShowGPTResponse";

const GPTPanel = ({ setOpenGPTPanel }) => {
  const GPTString = useRef(null);
  const [responseText, setResponseText] = React.useState(null);
  const [error, setError] = React.useState();
  const defaultLanguage = useSelector((store) => store.user.defaultLanguage);
  const groq = new Groq({
    apiKey: process.env.REACT_APP_CHAT_API_KEY,
    dangerouslyAllowBrowser: true,
  });

  const asyncFun = async () => {
    try {
      const interaction = await groq.chat.completions.create({
        messages: [
          {
            role: "user",
            content: query + GPTString.current.value,
          },
        ],
        model: "openai/gpt-oss-20b",
      });
      setResponseText(interaction.choices[0]?.message?.content);
    } catch (error) {
      setError(error);
    }
  };
  return (
    <div className="dialogBox">
      <h2 style={{ padding: "20px" }}>Movie suggestions</h2>
      <input
        className="GPTSearchBox"
        type="text"
        placeholder={language?.[defaultLanguage].gptPlaceholder}
        ref={GPTString}
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

      <ShowGPTResponse responseText={responseText} />
    </div>
  );
};

export default GPTPanel;
