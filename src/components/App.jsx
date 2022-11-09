import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const MoviePage = lazy(() => import('../pages/MoviePage/MoviePage'));
const MoviesListPage = lazy(() =>
  import('../pages/MoviesListPage/MoviesListPage')
);
const MovieCast = lazy(() => import('../pages/MovieCast/MovieCast'));
const MovieReviews = lazy(() => import('../pages/MovieReviews/MovieReviews'));
const SharedLayout = lazy(() => import('./SharedLayout'));
const NotFound = lazy(() => import('../pages/NotFound/NotFound'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/movies" element={<MoviesListPage />} />
          <Route path="/movies/:movieId" element={<MoviePage />}>
            <Route path="cast" element={<MovieCast />} />
            <Route path="reviews" element={<MovieReviews />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
};
