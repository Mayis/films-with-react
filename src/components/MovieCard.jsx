import React from "react";
import Card from "@mui/material/Card";
import { apiKey, imgURL } from "../helper/APIs";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getSelectedMovie } from "../redux/slices/selectedMovieSlice";
export default function MovieCard({ movie }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleMovie = (id) => {
    navigate(`/movie/${id}`);
  };
  return (
    <Card
      sx={{ width: "100%", marginBottom: "10px" }}
      onClick={() => handleMovie(movie.id)}
    >
      <CardActionArea
        sx={{ display: "flex", height: "250px", padding: "20px" }}
      >
        <CardMedia
          component="img"
          sx={{ width: "20%", height: "100%" }}
          image={imgURL + movie.poster_path}
          alt="green iguana"
        />
        <CardContent sx={{ width: "80%" }}>
          <Typography gutterBottom variant="h5" component="h5">
            {movie.title ? movie.title : movie.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {movie.overview}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
