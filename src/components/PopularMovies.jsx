import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import MovieCard from "./MovieCard";
import { papularMoviesSelector } from "../redux/slices/papularMoviesSlice";
import { useSelector } from "react-redux";
export default function PopularMovies() {
  const papularMovies = useSelector(papularMoviesSelector);
  return (
    <div style={{ width: "100%", background: "#f5f5f5" }}>
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
            Popular Movies
          </Typography>
        </Box>
        <Box>
          {papularMovies?.map((movie, i) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </Box>
      </Container>
    </div>
  );
}
