import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import PropTypes from 'prop-types';

import Navigation from '../components/Navigation/Navigation';
import Spinner from './spinner/Spinner';
import { Box, BgShapes } from '../pages/HomePage/Homepage.styled';
import { BoxContent } from 'pages/MoviePage/MoviePage.styled';
// import { SectionContainer } from './Navigation/Navigation.styled';

const SharedLayout = () => {
  return (
    <>
      <Box>
        <BgShapes />
        <Navigation />
        <Suspense fallback={<Spinner />}>
          <BoxContent
            style={{ marginTop: '110px', zIndex: '2', overflow: 'auto' }}
          >
            <Outlet />
          </BoxContent>
        </Suspense>
      </Box>
    </>
  );
};

SharedLayout.propTypes = {
  Outlet: PropTypes.node,
};

export default SharedLayout;
