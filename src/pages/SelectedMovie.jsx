import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getSelectedMovie,
  getSelectedTrailer,
  selectedMovieSelector,
  selectedTrailerSelector,
} from "../redux/slices/selectedMovieSlice";
import { apiKey, imgURL, videoURL } from "../helper/APIs";
import "../css/style.css";
import { useParams } from "react-router-dom";
function SelectedMovie() {
  const { movieId } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      getSelectedMovie({
        url: `https://api.themoviedb.org/3/movie/${movieId}?${apiKey}`,
      })
    );
    dispatch(
      getSelectedTrailer({
        url: `https://api.themoviedb.org/3/movie/${movieId}/videos?${apiKey}`,
      })
    );
  }, []);
  const movie = useSelector(selectedMovieSelector);
  const trailer = useSelector(selectedTrailerSelector);
  console.log(trailer);

  console.log(movie);
  return (
    <>
      <div
        className="mainPart"
        style={{ backgroundImage: `url(${imgURL + movie.backdrop_path})` }}
      >
        <div className="backDiv">
          <div className="imgDiv">
            <img
              src={imgURL + movie.poster_path}
              alt=""
              className="posterImg"
            />
          </div>
          <div className="infoDiv">
            <h1 className="titleH1">
              {movie.title
                ? movie.title.length > 13
                  ? movie.title.slice(0, 13) + "..."
                  : movie.title
                : ""}
            </h1>
            <p className="rating">
              {" "}
              rate - {movie.vote_average ? movie.vote_average.toFixed(1) : ""}
            </p>
          </div>
        </div>
      </div>
      <div className="description">
        <h1 className="descName">DESCRIPTION</h1>
        <p className="descBody">{movie.overview}</p>
      </div>
      <div className="trailerDiv">
        <h1 className="trailerName">TRAILER</h1>
        {trailer ? (
          <div className="videoDiv">
            <iframe
              width="100%"
              height="100%"
              src={videoURL + trailer.key}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        ) : (
          <h1 className="trailerError">SORRY THERE IS NO TRAILER</h1>
        )}
      </div>
    </>
  );
}

export default SelectedMovie;
