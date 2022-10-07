import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { popularUrl, trendingUrl } from "../helper/APIs";
import request from "../helper/request";
import {
  currentPageSelector,
  getPapularMovies,
  setCurrentPage,
} from "../redux/slices/papularMoviesSlice";
import Pagination from "@mui/material/Pagination";
import Slider from "../components/Slider/Slider";
import PopularMovies from "../components/PopularMovies";
import {
  getTrendingMovies,
  trendingMoviesSelector,
} from "../redux/slices/trendingMoviesSlice";

function Home() {
  const page = useSelector(currentPageSelector);
  const dispatch = useDispatch();
  console.log(page);

  useEffect(() => {
    dispatch(getPapularMovies({ url: popularUrl, page }));
    dispatch(getTrendingMovies(trendingUrl));
  }, [page]);
  const handleChange = (e, val) => {
    dispatch(
      setCurrentPage({
        page: val,
      })
    );
  };
  return (
    <>
      <Slider />
      <PopularMovies />
      <Pagination
        count={20}
        defaultPage={1}
        onChange={handleChange}
        variant="outlined"
        color="primary"
      />
    </>
  );
}

export default Home;
