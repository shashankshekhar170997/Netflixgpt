import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    trailorVideo: null,
    popularMovies: null,
    topratedMovies: null,
    upcomingMovies: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addTrailorVideo: (state, action) => {
      state.trailorVideo = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addTopRatedMovies: (state, action) => {
      state.topratedMovies = action.payload;
    },
    addUpComingMovies: (state, action) => {
      state.upcomingMovies = action.payload;
    },
  },
});

export default moviesSlice.reducer;
export const {
  addNowPlayingMovies,
  addTrailorVideo,
  addPopularMovies,
  addTopRatedMovies,
  addUpComingMovies,
} = moviesSlice.actions;
