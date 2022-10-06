import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import request from "../../helper/request";
const initialState = {
  trendingMovies: [],
  loading: false,
  error: "",
};
export const getTrendingMovies = createAsyncThunk(
  "trendingMovies/getTrendingMovies",
  async (url, page) => {
    return request(url).then((data) => data.results);
  }
);
export const trendingMoviesSlice = createSlice({
  name: "trendingMovies",
  initialState,
  reducers: {},
  extraReducers: {
    [getTrendingMovies.pending](state) {
      state.loading = true;
    },
    [getTrendingMovies.fulfilled](state, { payload }) {
      state.trendingMovies = payload;
      state.loading = false;
    },
    [getTrendingMovies.rejected](state) {
      state.error = "error";
    },
  },
});

export const trendingMoviesSelector = (state) =>
  state.trendingMovies.trendingMovies;

export default trendingMoviesSlice.reducer;
