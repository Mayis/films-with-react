import { configureStore } from "@reduxjs/toolkit";
import genreSlice from "./slices/genreSlice";
import trendingMoviesSlice from "./slices/trendingMoviesSlice";
import papularMoviesSlice from "./slices/papularMoviesSlice";
import searchMoviesSlice from "./slices/searchMoviesSlice";
import selectedMovieSlice from "./slices/selectedMovieSlice";

const store = configureStore({
  reducer: {
    genre: genreSlice,
    trendingMovies: trendingMoviesSlice,
    papularMovies: papularMoviesSlice,
    searchMovies: searchMoviesSlice,
    selectedMovie: selectedMovieSlice,
  },
});
export default store;
