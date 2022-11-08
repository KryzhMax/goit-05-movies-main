import { Link, useLocation, useParams } from 'react-router-dom';
import Avatar from 'react-avatar';
import PropTypes from 'prop-types';

import useHook from '../../hooks/hooks';
import {
  HStyled,
  TextStyled,
  ListStyled,
  SectionContainer,
} from './MovieReviews.styled';

const MovieReviews = () => {
  const movieId = useParams();
  const reviews = useHook.useFetchReviews(movieId);
  const location = useLocation();
  // console.log(reviews);
  return (
    <>
      {reviews.length === 0 && <HStyled>Guess nothing is there...</HStyled>}
      {reviews && (
        <section>
          <SectionContainer>
            <Link to={location?.state?.from ?? '/'} />
            <HStyled>MovieReviews</HStyled>
            <ListStyled>
              {reviews.map(
                ({ author_details: { username }, content, created_at, id }) => {
                  return (
                    <li key={id}>
                      <Avatar round={true} size={40} name={username} />
                      <TextStyled>
                        <b>{username.toUpperCase()}</b>
                      </TextStyled>
                      <TextStyled>{content}</TextStyled>
                      {/* <p></p> */}
                      <TextStyled>
                        <i>
                          {created_at.slice(0, 10) +
                            ' ' +
                            created_at.slice(12, 16)}
                        </i>
                      </TextStyled>
                    </li>
                  );
                }
              )}
            </ListStyled>
          </SectionContainer>
        </section>
      )}
    </>
  );
};

MovieReviews.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      author_details: PropTypes.shape({
        username: PropTypes.string.isRequired,
      }),
      content: PropTypes.string.isRequired,
      created_at: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};

export default MovieReviews;
