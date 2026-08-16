import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./UserSlice";
import movieListReducer from "./movieListSlice";

export const netflixGPTStore = configureStore({
  reducer: {
    user: userReducer,
    movieList: movieListReducer,
  },
});
