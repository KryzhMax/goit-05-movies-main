import { Link, useLocation, useParams } from 'react-router-dom';
import PropTypes from 'prop-types';

import useHook from '../../hooks/hooks';
import { ListStyled } from '../HomePage/Homepage.styled';
import { ItemStyled, Img, SectionContainer } from './MovieCast.styled';
import { PStyled } from 'pages/MoviePage/MoviePage.styled';

const MovieCast = () => {
  const movieId = useParams();
  const cast = useHook.useFetchCast(movieId);
  const location = useLocation();

  return (
    cast && (
      <section>
        <SectionContainer>
          <Link to={location?.state?.from ?? '/'} />
          <ListStyled>
            {cast.map(({ character, profile_path, name }, index) => (
              <ItemStyled key={index}>
                <Img
                  src={`https://image.tmdb.org/t/p/w500${
                    profile_path === null
                      ? '/h5oGodvcoq8cyIDTy79yKn4qbey.jpg'
                      : profile_path
                  }`}
                  alt={character}
                />
                <PStyled>Character: {character}</PStyled>
                <PStyled>Name: {name}</PStyled>
              </ItemStyled>
            ))}
          </ListStyled>
        </SectionContainer>
      </section>
    )
  );
};

MovieCast.propTypes = {
  cast: PropTypes.arrayOf(
    PropTypes.shape({
      character: PropTypes.string.isRequired,
      profile_path: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
};

export default MovieCast;
