import { configureStore } from "@reduxjs/toolkit";
import genreSlice from "./slices/genreSlice";
import moviesSlice from "./slices/moviesSlice";

const store = configureStore({
  reducer: {
    genre: genreSlice,
    movies: moviesSlice,
  },
});
export default store;
