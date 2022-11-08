import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import PropTypes from 'prop-types';

import Navigation from '../components/Navigation/Navigation';
import Spinner from './spinner/Spinner';
import { Box, BgShapes } from '../pages/HomePage/Homepage.styled';
import { SectionContainer } from './Navigation/Navigation.styled';

const SharedLayout = () => {
  return (
    <>
      <Box>
        <BgShapes />
        <Navigation />
        <Suspense fallback={<Spinner />}>
          <SectionContainer
            style={{ marginTop: '110px', zIndex: '2', overflow: 'auto' }}
          >
            <Outlet />
          </SectionContainer>
        </Suspense>
      </Box>
    </>
  );
};

SharedLayout.propTypes = {
  Outlet: PropTypes.node,
};

export default SharedLayout;
