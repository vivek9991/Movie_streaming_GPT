import { language } from "./language";

export const CONTENT_IMG =
  "https://assets.nflxext.com/ffe/siteui/vlv3/81b52f88-dc76-488d-a939-0cf13a260a6e/web/IN-en-20260622-TRIFECTA-perspective_d39d60ef-cb5a-4793-9546-0a8d9a87948e_large.jpg";
export const LOGO =
  "https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2026-05-14/consent/87b6a5c0-0104-4e96-a291-092c11350111/019ae4b5-d8fb-7693-90ba-7a61d24a8837/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const GetMovieUrl =
  "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1";
export const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer " + process.env.REACT_APP_TMDB_KEY,
  },
};

export const movieUrl = "https://image.tmdb.org/t/p/w200/";
export const languageType = {
  English: "en",
  Hindi: "hindi",
  Spanish: "spanish",
};

export const supportedLanguages = [
  { value: languageType.English, label: language.common.English },
  { value: languageType.Hindi, label: language.common.Hindi },
  { value: languageType.Spanish, label: language.common.Spanish },
];

export const query =
  "Do not add disclaimers and Act as a movie recoomndation system and Give me the answer in just the names of the requested value. Nothing extra is needed. Only give me names of all movies comma spearated strings which satisfy condition: ";

export const getMovieFromNameUrl = (name) =>
  `https://api.themoviedb.org/3/search/movie?query=${name}&include_adult=false&language=en-US&page=1`;

export const GPT_KEY = process.env.REACT_APP_CHAT_API_KEY;
