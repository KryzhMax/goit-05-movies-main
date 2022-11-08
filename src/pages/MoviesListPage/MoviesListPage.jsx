import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import PropTypes from 'prop-types';

import API from '../../components/movies-api/API';
import MoviesGallery from 'components/movies-gallery/MoviesGallery';
import Spinner from 'components/spinner/Spinner';
import {
  ButtonStyled,
  ButtonWrapper,
  SectionContainer,
  InputStyled,
  FormStyled,
} from './MoviesListPage.styled';

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [status, setStatus] = useState(API.IDLE);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const queryParam = searchParams.get('query');
    if (!queryParam) return;
    const getMovies = async () => {
      setStatus(API.PENDING);

      try {
        const data = await API.fetchSearchMovies(queryParam, page);
        setMovies(prev => [...prev, ...data.results]);
        setStatus(API.RESOLVED);

        if (data.results.length < 20) {
          setStatus(API.LOADED);
        }
      } catch (error) {
        setStatus(API.REJECTED);
        console.log(error);
      }
    };
    getMovies();
  }, [searchParams, page]);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const searchValue = e.target.elements[0].value;
    setSearchParams({ query: searchValue });
    form.reset();
    setMovies([]);
    setPage(1);
  };

  const loadMore = () => {
    setPage(prev => prev + 1);
  };

  return (
    <>
      <FormStyled onSubmit={handleSubmit}>
        <InputStyled type="text" name="film" placeholder="type something" />
        <ButtonStyled type="submit" name="film">
          Search
        </ButtonStyled>
      </FormStyled>
      {status === API.PENDING && <Spinner />}

      {movies.length > 0 && (
        <section>
          <SectionContainer>
            <MoviesGallery movies={movies} />
            <ButtonWrapper>
              <ButtonStyled onClick={loadMore}>Load More</ButtonStyled>
            </ButtonWrapper>
          </SectionContainer>
        </section>
      )}
    </>
  );
};

MoviesPage.propTypes = {
  movies: PropTypes.array,
};

export default MoviesPage;
