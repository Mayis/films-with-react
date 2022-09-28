import React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { popularUrl } from "../helper/APIs";
import request from "../helper/request";
import { moviesSelector, setMovies } from "../redux/slices/moviesSlice";
import Pagination from "@mui/material/Pagination";
import Slider from "../components/Slider/Slider";

function Home() {
  const [page, setPage] = useState(1);
  const movies = useSelector(moviesSelector);
  const dispatch = useDispatch();
  console.log(movies);

  useEffect(() => {
    request(popularUrl, page).then((data) =>
      dispatch(setMovies({ movies: data.results }))
    );
  }, [page]);
  const handleChange = (e, val) => {
    setPage(val);
  };
  return (
    <>
      <Slider />
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
