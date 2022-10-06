import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import request from "../../helper/request";

const initialState = {
  genresMovies: [],
};

const genreSlice = createSlice({
  name: "genre",
  initialState,
  reducers: {
    setMoviesByGenre(state, { payload }) {
      state.genresMovies = payload.movies;
    },
  },
});

export const genreSelector = (state) => state.genre.genresMovies;
export const { setMoviesByGenre } = genreSlice.actions;
export default genreSlice.reducer;
