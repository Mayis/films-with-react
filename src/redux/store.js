import { configureStore } from "@reduxjs/toolkit";
import genreSlice from "./slices/genreSlice";
import trendingMoviesSlice from "./slices/trendingMoviesSlice";
import papularMoviesSlice from "./slices/papularMoviesSlice";

const store = configureStore({
  reducer: {
    genre: genreSlice,
    trendingMovies: trendingMoviesSlice,
    papularMovies: papularMoviesSlice,
  },
});
export default store;
