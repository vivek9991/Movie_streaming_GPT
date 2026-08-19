import { createSlice } from "@reduxjs/toolkit";

const movieListSlice = createSlice({
  name: "movieList",
  initialState: {
    now_playing: null,
    popular: null,
    top_rated: null,
    upcoming: null,
    movieIdOfTrailerId: null,
    trailerId: null,
  },
  reducers: {
    setMovieList: (state, action) => {
      state.movieList = action.payload;
    },
    setTrailerId: (state, action) => {
      state.movieIdOfTrailerId = action.payload.movieId;
      state.trailerId = action.payload.trailerId;
    },
  },
});

export const { setMovieList, setTrailerId } = movieListSlice.actions;
export default movieListSlice.reducer;
