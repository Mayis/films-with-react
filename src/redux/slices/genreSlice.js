import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import request from "../../helper/request";

const initialState = {
  genresMovies: [],
  currentPage: 1,
  loading: false,
  error: "",
};
export const getMoviesGenre = createAsyncThunk(
  "genre/getMoviesGenre",
  ({ url, page }) => request(url, page).then((data) => data.results)
);
const genreSlice = createSlice({
  name: "genre",
  initialState,
  reducers: {
    setCurrentPage(state, { payload }) {
      state.currentPage = payload.page;
    },
  },
  extraReducers: {
    [getMoviesGenre.pending](state) {
      state.loading = true;
    },
    [getMoviesGenre.fulfilled](state, { payload }) {
      state.loading = false;
      state.genresMovies = payload;
    },
    [getMoviesGenre.rejected](state) {
      state.error = "error";
    },
  },
});

export const genreSelector = (state) => state.genre.genresMovies;
export const genrePageSelector = (state) => state.genre.currentPage;
export const { setCurrentPage } = genreSlice.actions;
export default genreSlice.reducer;
