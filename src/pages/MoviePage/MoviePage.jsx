import { useLocation, useParams, Outlet } from 'react-router-dom';
import PropTypes from 'prop-types';

import useHook from '../../hooks/hooks';
import {
  Btn,
  BtnWrapper,
  ContentWrapper,
  PStyled,
  BoxContent,
  Img,
} from './MoviePage.styled';
import { HStyled } from 'pages/MovieReviews/MovieReviews.styled';
// import { Box } from 'pages/HomePage/Homepage.styled';

const MoviePage = () => {
  const movieId = useParams();

  const movie = useHook.useFetchMovie(movieId);
  const location = useLocation();
  if (!movie) return null;
  const { title, genres, homepage, overview, tagline, backdrop_path, adult } =
    movie || {};

  return (
    <>
      <Btn to={location?.state?.from ?? '/'}>Go back</Btn>
      <ContentWrapper>
        <BoxContent>
          <HStyled>{title}</HStyled>
          <a
            target="_blank"
            href={homepage}
            rel="noreferrer nofollow noreferrer"
          >
            <Img
              src={`https://image.tmdb.org/t/p/w500${
                backdrop_path === null
                  ? '/h5oGodvcoq8cyIDTy79yKn4qbey.jpg'
                  : backdrop_path
              }`}
              alt={title}
              // width={320}
              max-height={500}
            />
          </a>
        </BoxContent>
        <BoxContent>
          <HStyled>
            Genres:
            {genres[0]?.name}, {genres[1]?.name}
          </HStyled>

          <PStyled>Overview: {overview}</PStyled>
          <PStyled>{tagline}</PStyled>
          <PStyled>
            <b>Recommended for: {adult ? 'Adults' : 'Kids'}</b>
          </PStyled>
        </BoxContent>

        <hr />
      </ContentWrapper>
      <BtnWrapper>
        <Btn to="cast" state={{ from: location.state?.from }}>
          Actors
        </Btn>
        <Btn to="reviews" state={{ from: location.state?.from }}>
          Reviews
        </Btn>
      </BtnWrapper>
      <hr />

      <Outlet />
    </>
  );
};

MoviePage.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    genres: PropTypes.string.isRequired,
    homepage: PropTypes.string,
    overview: PropTypes.string.isRequired,
    tagline: PropTypes.string.isRequired,
    backdrop_path: PropTypes.string,
    adult: PropTypes.string.isRequired,
  }),
};

export default MoviePage;
