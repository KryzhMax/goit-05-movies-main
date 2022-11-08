import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  width: 100%;
  position: fixed;
  top: 0px;
  z-index: 3;
  background-color: #8560b3;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
`;

export const LinkStyled = styled(NavLink)`
  font-size: 32px;
  font-weight: bold;
  text-decoration: none;

  &.active {
    color: orange;
  }
`;

export const ListStyled = styled.ul`
  display: flex;
  gap: 20px;
  list-style: none;
`;

export const NavMenu = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SectionContainer = styled.div`
  padding: 20px 50px;
`;

export const LogoStyled = styled(NavLink)`
  font-size: 32px;
  font-weight: bold;
  text-decoration: none;

  &.active {
    color: rgb(85, 26, 139);
  }
`;
