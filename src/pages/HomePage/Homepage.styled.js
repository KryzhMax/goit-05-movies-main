import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Box = styled.div`
  background-image: linear-gradient(to bottom right, #c9d6ff, #e2e2e2);
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  background-size: cover;
  color: white;
  font-weight: 200;
`;

export const BgShapes = styled.div`
  content: '';
  position: absolute;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 10476px;
  background-size: 100%;
  animation: 120s infiniteScroll linear infinite;
  background-repeat-x: repeat;
  background-image: url(https://cdn2.hubspot.net/hubfs/53/Pricing%202017%20Assets/marketing/Header_Circles-1.svg);

  @-webkit-keyframes infiniteScroll {
    0% {
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }

    100% {
      -webkit-transform: translate3d(0, -1692px, 0);
      transform: translate3d(0, -1692px, 0);
    }
  }

  @keyframes infiniteScroll {
    0% {
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }

    100% {
      -webkit-transform: translate3d(0, -1692px, 0);
      transform: translate3d(0, -1692px, 0);
    }
  } ;
`;

export const Container = styled.div`
  padding: 0 20px;
`;

export const ListStyled = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  column-gap: 20px;
  row-gap: 30px;
  margin: 30px 0;
  padding-left: 0;
`;

export const ItemStyled = styled.li`
  max-width: 280px;
  flex-basis: calc((100% - (5) - 1) * 20px / 5);
  box-shadow: 0px 11px 15px -1px rgba(161, 161, 161, 0.64);
  transition: transform 300ms linear;
  background-color: rgba(100, 43, 115, 0.3);

  &:hover,
  &:focus {
    transform: scale(1.1);
  }
`;

export const PStyled = styled.p`
  margin: 0;
  padding: 5px 0;
  font-size: 18px;
  font-family: 'Ubuntu', sans-serif;
  font-weight: 400;
`;

export const NavLinkStyled = styled(NavLink)`
  text-decoration: none;
  color: #020202;
`;
