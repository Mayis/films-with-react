import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  trendingMovies: [],
  papularMovies: [],
  currentPage: 1,
};

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    setPapularMovies(state, { payload }) {
      state.papularMovies = payload.papular;
    },
    setTrendingMovies(state, { payload }) {
      state.trendingMovies = payload.trending;
    },
    setCurrentPage(state, { payload }) {
      state.currentPage = payload.page;
    },
  },
});

export default moviesSlice.reducer;

export const papularMoviesSelector = (state) => state.movies.papularMovies;
export const trendingMoviesSelector = (state) => state.movies.trendingMovies;
export const currentPageSelector = (state) => state.movies.currentPage;
export const { setPapularMovies, setTrendingMovies, setCurrentPage } =
  moviesSlice.actions;
