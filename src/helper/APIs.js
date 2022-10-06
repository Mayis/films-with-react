export const apiKey = "api_key=f7d65e059593a0f3812fa8f984d7cb57";
export const baseURL = "https://api.themoviedb.org/3";
export const popularUrl =
  baseURL + "/discover/movie?sort_by=popularity.desc&" + apiKey;
export const trendingUrl = baseURL + "/trending/all/day?" + apiKey;
export const imgURL = "https://image.tmdb.org/t/p/w500";
export const searchURL = baseURL + "/search/movie?" + apiKey;
export const genreURL =
  "https://api.themoviedb.org/3/discover/movie?api_key=f7d65e059593a0f3812fa8f984d7cb57&with_genres=";
export const videoURL = "https://www.youtube.com/embed/";

export const genres = [
  { id: 28, name: "Action" },
  { id: 12, name: "Adventure" },
  { id: 16, name: "Animation" },
  { id: 35, name: "Comedy" },
  { id: 80, name: "Crime" },
  { id: 99, name: "Documentary" },
  { id: 18, name: "Drama" },
  { id: 10751, name: "Family" },
  { id: 14, name: "Fantasy" },
  { id: 36, name: "History" },
  { id: 27, name: "Horror" },
  { id: 10402, name: "Music" },
  { id: 9648, name: "Mystery" },
  { id: 10749, name: "Romance" },
  { id: 878, name: "Science Fiction" },
  { id: 10770, name: "TV Movie" },
  { id: 53, name: "Thriller" },
  { id: 10752, name: "War" },
  { id: 37, name: "Western" },
];
