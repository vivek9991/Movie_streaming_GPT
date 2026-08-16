import { createSlice } from "@reduxjs/toolkit";

const movieListSlice = createSlice({
  name: "movieList",
  initialState: {
    movieList: null,
  },
  reducers: {
    setMovieList: (state, action) => {
      state.movieList = action.payload;
    },
  },
});

export const { setMovieList } = movieListSlice.actions;
export default movieListSlice.reducer;
