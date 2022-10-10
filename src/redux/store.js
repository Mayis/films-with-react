import { configureStore } from "@reduxjs/toolkit";
import genreSlice from "./slices/genreSlice";
import trendingMoviesSlice from "./slices/trendingMoviesSlice";
import papularMoviesSlice from "./slices/papularMoviesSlice";
import searchMoviesSlice from "./slices/searchMoviesSlice";

const store = configureStore({
  reducer: {
    genre: genreSlice,
    trendingMovies: trendingMoviesSlice,
    papularMovies: papularMoviesSlice,
    searchMovies: searchMoviesSlice,
  },
});
export default store;
