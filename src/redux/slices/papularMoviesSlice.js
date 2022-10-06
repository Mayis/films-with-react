import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import request from "../../helper/request";

const initialState = {
  papularMovies: [],
  loading: false,
  error: "",
  currentPage: 1,
};
export const getPapularMovies = createAsyncThunk(
  "papularMovies/getPapularMovies",
  async (url, page) => {
    return request(url, page).then((data) => data.results);
  }
);
const papularMoviesSlice = createSlice({
  name: "papularMovies",
  initialState,
  reducers: {
    setCurrentPage(state, { payload }) {
      state.currentPage = payload.page;
    },
  },
  extraReducers: {
    [getPapularMovies.pending](state) {
      state.loading = true;
    },
    [getPapularMovies.fulfilled](state, { payload }) {
      state.loading = false;
      state.papularMovies = payload;
    },
    [getPapularMovies.rejected](state) {
      state.error = "error";
    },
  },
});

export default papularMoviesSlice.reducer;

export const papularMoviesSelector = (state) =>
  state.papularMovies.papularMovies;
export const currentPageSelector = (state) => state.papularMovies.currentPage;
export const { setCurrentPage } = papularMoviesSlice.actions;
