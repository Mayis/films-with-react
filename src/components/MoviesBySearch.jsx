import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { searchMoviesSelector } from "../redux/slices/searchMoviesSlice";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import MovieCard from "./MovieCard";
import { useParams } from "react-router-dom";
function MoviesBySearch() {
  const { searchWord } = useParams();
  const searchedMovies = useSelector(searchMoviesSelector);
  console.log(searchedMovies);
  return (
    <Container sx={{ width: "90%" }}>
      <Box
        sx={{
          borderBottom: "3px solid #221f1f",
          padding: "10px 0px",
          marginBottom: "10px",
        }}
      >
        <Typography
          variant="h5"
          component="h1"
          sx={{ padding: "5px", color: "#221f1f" }}
        >
          Searched value '{searchWord}'
        </Typography>
      </Box>
      <Box>
        {searchedMovies?.map((movie, i) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </Box>
    </Container>
  );
}
export default MoviesBySearch;
