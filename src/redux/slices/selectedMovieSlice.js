import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import request from "../../helper/request";

const initialState = {
  movie: {},
  loading: false,
  error: "",
  trailer: [],
  trailerLoading: false,
  trailerError: "",
};

export const getSelectedMovie = createAsyncThunk(
  "selectedMovie/getSelectedMovie",
  async ({ url }) => {
    return request(url).then((data) => data);
  }
);
export const getSelectedTrailer = createAsyncThunk(
  "selectedMovie/getSelectedTrailer",
  async ({ url }) => {
    return request(url).then((data) => data.results);
  }
);
const selectedMovieSlice = createSlice({
  name: "selectedMovie",
  initialState,
  reducers: {},
  extraReducers: {
    [getSelectedMovie.pending](state) {
      state.loading = true;
    },
    [getSelectedMovie.fulfilled](state, { payload }) {
      state.loading = false;
      state.movie = payload;
    },
    [getSelectedMovie.rejected](state) {
      state.error = " trailer error";
    },
    [getSelectedTrailer.pending](state) {
      state.trailerLoading = true;
    },
    [getSelectedTrailer.fulfilled](state, { payload }) {
      state.trailerLoading = false;
      state.trailer = payload;
    },
    [getSelectedTrailer.rejected](state) {
      state.trailerError = "error";
    },
  },
});

export default selectedMovieSlice.reducer;
export const selectedMovieSelector = (state) => state.selectedMovie.movie;
export const selectedTrailerSelector = (state) =>
  state.selectedMovie.trailer[0];
