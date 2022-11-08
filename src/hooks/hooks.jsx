import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import API from '../components/movies-api/API';

const useFetchMovie = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState('');

  useEffect(() => {
    movieId && API.fetchMovieById(movieId).then(setMovie);
  }, [movieId, setMovie]);
  return movie;
};

const useFetchCast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState('');

  useEffect(() => {
    movieId && API.fetchCast(movieId).then(setCast);
  }, [movieId, setCast]);
  return cast;
};

const useFetchReviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    movieId && API.fetchReviews(movieId).then(setReviews);
  }, [movieId, setReviews]);
  return reviews;
};

const useHook = { useFetchMovie, useFetchCast, useFetchReviews };

export default useHook;
