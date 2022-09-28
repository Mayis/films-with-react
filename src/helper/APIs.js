export const apiKey = "api_key=f7d65e059593a0f3812fa8f984d7cb57";
export const baseURL = "https://api.themoviedb.org/3";
export const popularUrl =
  baseURL + "/discover/movie?sort_by=popularity.desc&" + apiKey;
export const trendingUrl = baseURL + "/trending/all/day?" + apiKey;
export const imgURL = "https://image.tmdb.org/t/p/w500";
export const searchURL = baseURL + "/search/movie?" + apiKey;
export const ganreURL = baseURL + "&with_genres=";
export const videoURL = "https://www.youtube.com/embed/";
