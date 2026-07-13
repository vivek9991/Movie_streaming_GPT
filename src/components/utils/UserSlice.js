import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "userSlice",
  initialState: {
    user: null,
  },
  reducers: {
    setUserData: (state, action) => {
      state.user = action.payload;
    },
    getUserData: (state) => state.user,
  },
});
export const { setUserData, getUserData } = userSlice.actions;
export default userSlice.reducer;
