import { createSlice } from "@reduxjs/toolkit";
import { languageType } from "./constants";

const userSlice = createSlice({
  name: "userSlice",
  initialState: {
    user: null,
    defaultLanguage: languageType.English,
  },
  reducers: {
    setUserData: (state, action) => {
      state.user = action.payload;
    },
    getUserData: (state) => state.user,
    toggleLanguage: (state, action) => {
      state.defaultLanguage = action.payload;
    },
  },
});
export const { setUserData, getUserData, toggleLanguage } = userSlice.actions;
export default userSlice.reducer;
