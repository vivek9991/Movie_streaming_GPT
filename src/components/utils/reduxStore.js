import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./UserSlice";

export const netflixGPTStore = configureStore({
  reducer: {
    user: userReducer,
  },
});
