import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "./style.css";
// import required modules
import { Autoplay, FreeMode, Pagination } from "swiper";
import { apiKey, imgURL, movieURl } from "../../helper/APIs";
import { trendingMoviesSelector } from "../../redux/slices/trendingMoviesSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getSelectedMovie } from "../../redux/slices/selectedMovieSlice";
export default function Slider() {
  const trendingMovies = useSelector(trendingMoviesSelector);
  console.log(trendingMovies);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleMovie = (id) => {
    navigate(`/movie/${id}`);
  };
  return (
    <div id="sliderParent">
      <div id="mainTitle">
        <h1 className="titleH1">Trending Movies</h1>
      </div>
      <div id="slider">
        <Swiper
          slidesPerView={5}
          spaceBetween={15}
          freeMode={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, FreeMode]}
          className="mySwiper"
        >
          {trendingMovies?.map((movie, i) => (
            <SwiperSlide key={movie.id} onClick={() => handleMovie(movie.id)}>
              <img
                src={imgURL + movie.poster_path}
                alt={movie.original_title + " image"}
                className="slideImg"
              />
              <div className="sliderTitle">
                <span>{movie.title ? movie.title : movie.name}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
