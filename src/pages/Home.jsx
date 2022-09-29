import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { popularUrl, trendingUrl } from "../helper/APIs";
import request from "../helper/request";
import {
  currentPageSelector,
  papularMoviesSelector,
  setCurrentPage,
  setPapularMovies,
  setTrendingMovies,
  trendingMoviesSelector,
} from "../redux/slices/moviesSlice";
import Pagination from "@mui/material/Pagination";
import Slider from "../components/Slider/Slider";

function Home() {
  const page = useSelector(currentPageSelector);
  const papularMovies = useSelector(papularMoviesSelector);
  const trendingMovies = useSelector(trendingMoviesSelector);
  const dispatch = useDispatch();
  // console.log(papularMovies);
  console.log(trendingMovies);

  useEffect(() => {
    request(popularUrl, page).then((data) =>
      dispatch(setPapularMovies({ papular: data.results }))
    );
    request(trendingUrl, page).then((data) =>
      dispatch(setTrendingMovies({ trending: data.results }))
    );
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
      <Slider trending={trendingMovies} />
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
