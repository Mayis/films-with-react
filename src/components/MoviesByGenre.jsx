import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { genreURL } from "../helper/APIs";
import {
  genrePageSelector,
  genreSelector,
  getMoviesGenre,
  setCurrentPage,
} from "../redux/slices/genreSlice";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import { imgURL } from "../helper/APIs";
import Pagination from "@mui/material/Pagination";

function MoviesByGenre() {
  const moviesByGenre = useSelector(genreSelector);
  const page = useSelector(genrePageSelector);
  const dispatch = useDispatch();
  console.log(moviesByGenre);
  const { genreId } = useParams();
  useEffect(() => {
    dispatch(getMoviesGenre({ url: genreURL + genreId, page }));
  }, [genreId, page]);
  const handleChange = (e, val) => {
    dispatch(
      setCurrentPage({
        page: val,
      })
    );
  };
  return (
    <>
      <Box sx={{ width: "80%", margin: "0 auto", padding: "10px" }}>
        <ImageList variant="masonry" cols={4} gap={8}>
          {moviesByGenre.map((item) => (
            <ImageListItem key={item.poster_path}>
              <img
                src={`${imgURL + item.poster_path}?w=248&fit=crop&auto=format`}
                srcSet={`${
                  imgURL + item.poster_path
                }?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
              />
              <ImageListItemBar title={item.title} />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
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

export default MoviesByGenre;
