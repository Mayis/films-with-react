import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import request from "../../helper/request";

const initialState = {
  movies: [],
  loading: false,
  error: "",
  page: 1,
};
export const getSearchedMovie = createAsyncThunk(
  "searchMovies/getSearchedMovie",
  async ({ url, page }) => {
    return request(url, page).then((data) => data.results);
  }
);

const searchMovieSlice = createSlice({
  name: "searchMovies",
  initialState,
  reducers: {},
  extraReducers: {
    [getSearchedMovie.pending](state) {
      state.loading = true;
    },
    [getSearchedMovie.fulfilled](state, { payload }) {
      state.loading = false;
      state.movies = payload;
    },
    [getSearchedMovie.rejected](state) {
      state.error = "error";
    },
  },
});

export default searchMovieSlice.reducer;
export const searchMoviesSelector = (state) => state.searchMovies.movies;
