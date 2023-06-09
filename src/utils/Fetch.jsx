import axios from "axios";

export const getSearchMovies = (title) => {
  return axios
    .get(
      `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_MOVIEDB_API_KEY}&language=en-US&query=${title}&page=1&include_adult=false`
    )
    .then((res) => res.data.results)
    .catch((err) => console.log("error fetch search module =>", err));
};

export const getTrendingMovies = () => {
  return axios
    .get(
      `https://api.themoviedb.org/3/trending/movie/day?api_key=${process.env.REACT_APP_MOVIEDB_API_KEY}`
    )
    .then((res) => res.data.results)
    .catch((err) => console.log("error fetch trending =>", err));
};

export const getPopularMovies = (page) => {
  return axios
    .get(
      `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_MOVIEDB_API_KEY}&language=en-US&page=${page}&region=US`
    )
    .then((res) => res.data)
    .catch((err) => console.log("error fetch popular => ", err));
};

export const getTopRatedMovies = (page) => {
  return axios
    .get(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_MOVIEDB_API_KEY}&language=en-US&page=${page}&region=US`
    )
    .then((res) => res.data.results)
    .catch((err) => console.log("error fetch top rated =>", err));
};

export const getUpcomingMovies = (page) => {
  return axios
    .get(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_MOVIEDB_API_KEY}&language=en-US&page=${page}&region=US`
    )
    .then((res) => res.data.results)
    .catch((err) => console.log("error fetch top rated =>", err));
};

export const getMovieDetails = (id) => {
  return axios
    .get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_MOVIEDB_API_KEY}&language=en-US`
    )
    .then((res) => res.data)
    .catch((err) => console.log("error fetch movie details =>", err));
};

export const getImageLists = (id) => {
  return axios
    .get(
      `https://api.themoviedb.org/3/movie/${id}/images?api_key=${process.env.REACT_APP_MOVIEDB_API_KEY}`
    )
    .then((res) => res.data)
    .catch((err) => console.log("error fetch images =>", err));
};

export const getCredits = (id) => {
  return axios
    .get(
      `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${process.env.REACT_APP_MOVIEDB_API_KEY}&language=en-US`
    )
    .then((res) => res.data)
    .catch((err) => console.log("error fetch credits =>", err));
};

export const getLatest = () => {
  return axios
    .get(
      `https://api.themoviedb.org/3/movie/latest?api_key=${process.env.REACT_APP_MOVIEDB_API_KEY}&language=en-US`
    )
    .then((res) => res.data)
    .catch((err) => console.log("error fetch latest movie =>", err));
};

export const getVideos = (id) => {
  return axios
    .get(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`)
    .then((res) => res.data)
    .catch((err) => console.log("error fetch videos =>", err));
};

export const getNowPlaying = () => {
  return axios
    .get(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_MOVIEDB_API_KEY}&language=en-US&page=1`
    )
    .then((res) => res.data.results)
    .catch((err) => console.log("error fetch now playing =>", err));
};
