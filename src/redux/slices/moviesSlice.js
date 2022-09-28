import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movies: [],
};

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    setMovies(state, { payload }) {
      state.movies = payload.movies;
    },
  },
});

export default moviesSlice.reducer;

export const moviesSelector = (state) => state.movies.movies;
export const { setMovies } = moviesSlice.actions;
