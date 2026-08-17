import { createSlice } from "@reduxjs/toolkit";

const movieListSlice = createSlice({
  name: "movieList",
  initialState: {
    now_playing: null,
    popular: null,
    top_rated: null,
    upcoming: null,
    trailerId: null,
  },
  reducers: {
    setMovieList: (state, action) => {
      state.movieList = action.payload;
    },
    setTrailerId: (state, action) => {
      state.trailerId = action.payload;
    },
  },
});

export const { setMovieList, setTrailerId } = movieListSlice.actions;
export default movieListSlice.reducer;
