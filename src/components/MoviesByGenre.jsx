import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { baseURL, genreURL } from "../helper/APIs";
import request from "../helper/request";
import { genreSelector, setMoviesByGenre } from "../redux/slices/genreSlice";

function MoviesByGenre() {
  const moviesByGenre = useSelector(genreSelector);
  const dispatch = useDispatch();
  console.log(moviesByGenre);
  const { genreId } = useParams();
  useEffect(() => {
    request(genreURL + genreId).then((data) =>
      dispatch(setMoviesByGenre({ movies: data.results }))
    );
  }, [genreId]);
  return <div>MoviesByGenre</div>;
}

export default MoviesByGenre;
