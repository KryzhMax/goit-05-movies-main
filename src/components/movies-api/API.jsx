import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const API_KEY = '69ef3d9e681291ff53ca8282894d5480';
axios.defaults.params = {
  api_key: API_KEY,
};

export async function fetchTrendMovies() {
  const { data } = await axios('trending/movie/week');
  // console.log(response);
  return data.results;
}

export async function fetchMovieById(id) {
  const { data } = await axios(`movie/${id}`);
  // console.log(data);
  return data;
}

export async function fetchCast(movieId) {
  const { data } = await axios(`movie/${movieId}/credits`);
  // console.log(data.cast);

  return data.cast;
}

export async function fetchReviews(movieId) {
  const { data } = await axios(`movie/${movieId}/reviews`);
  // console.log(data.results);

  return data.results;
}

export async function fetchSearchMovies(query = '', page = 1) {
  const { data } = await axios(`search/movie?query=${query}&page=${page}`);
  return data;
}

const API = {
  fetchTrendMovies,
  fetchMovieById,
  fetchCast,
  fetchReviews,
  fetchSearchMovies,
  IDLE: 'idle',
  PENDING: 'pending',
  LOADED: 'loaded',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

export default API;
