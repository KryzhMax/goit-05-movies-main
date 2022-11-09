import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { device } from 'utils/device';

export const Header = styled.header`
  width: 100%;
  height: 110px;
  position: fixed;
  top: 0px;
  z-index: 3;
  background-color: #8560b3;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;

  & > div {
    padding: 10px 20px;
    @media ${device.fablet} {
      padding: 0 20px;
    }
    @media ${device.tablet} {
      padding: 25px 20px;
    }
  }
`;

export const LinkStyled = styled(NavLink)`
  font-size: 24px;
  font-weight: bold;
  text-decoration: none;
  @media ${device.fablet} {
    font-size: 32px;
  }

  &.active {
    color: orange;
  }
`;

export const ListStyled = styled.ul`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: flex-end;
  margin: 0;
  padding: 0;
  gap: 10px;
  list-style: none;

  @media ${device.tablet} {
    flex-direction: row;
    flex-wrap: nowrap;
    gap: 15px;
  }
`;

export const NavMenu = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media ${device.mobileOnly} {
    padding: 20px 10px;
  }
  @media ${device.fablet} {
    padding: 10px 10px;
  }
`;

export const SectionContainer = styled.div`
  padding: 20px 20px;
`;

export const LogoStyled = styled(NavLink)`
  font-size: 32px;
  font-weight: bold;
  text-decoration: none;

  &.active {
    color: rgb(85, 26, 139);
  }
`;

export const SpanStyled = styled.span`
  font-size: 24px;
  @media ${device.fablet} {
    font-size: 32px;
  }
`;
