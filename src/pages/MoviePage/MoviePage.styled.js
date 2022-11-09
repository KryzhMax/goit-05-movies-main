import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { device } from 'utils/device';

export const Btn = styled(NavLink)`
margin-left: 10px;
  font-size: 20px;
  font-family: 'Ubuntu', sans-serif;
  text-decoration: none;

 min-width: 150px;
  border-radius: 4px;
  background-color: green;
  padding: 8px 16px;
  transition: all 250ms linear;
  text-align: center;
  color: #fff;
  border: 0;
  text-decoration: none;
  cursor: pointer;
  font-family: 'Ubuntu', sans-serif;
  font-size: 20px;
  line-height: 1.5;
  font-weight: bold;

  display: inline-block;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);

  :hover,
  :focus {
    background-color: rgb(2,0,36);
  `;

export const BtnWrapper = styled.div`
  display: flex;
  padding: 20px 0;
  gap: 20px;
  @media ${device.mobileOnly} {
    display: block;

    & :not(:last-child) {
      margin-bottom: 20px;
    }
  }
`;

export const ContentWrapper = styled.section`
  @media ${device.mobile} {
    display: flex;
    flex-direction: column;
    overflow: hidden;
    max-width: 320px;
  }
  @media ${device.fablet} {
    gap: 20px;
    max-width: 480px;
  }
  @media ${device.tablet} {
    display: flex;
    flex-direction: row;
    max-width: 767px;
    gap: 30px;
  }
  @media ${device.desktop} {
    max-width: 1200px;
  }
`;

export const PStyled = styled.p`
  text-indent: 10px;
  font-size: 16px;
  font-family: 'Ubuntu', sans-serif;
  font-weight: 400;
  line-height: 1.6;
  color: #000;
`;

// export const SectionContainer = styled.div`

// `;

export const BoxContent = styled.div`
  padding: 20px 10px;

  @media ${device.mobile} {
    max-width: 320px;
  }
  @media ${device.fablet} {
    max-width: 479px;
  }
  @media ${device.tablet} {
    max-width: 767px;
  }
  @media ${device.desktop} {
    max-width: 1199px;
  }
`;

export const Img = styled.img`
  @media ${device.mobile} {
    width: 300px;
  }
  @media ${device.fablet} {
    width: 459px;
  }
  @media ${device.tablet} {
    width: 459px;
  }
  @media ${device.desktop} {
    width: 747px;
  }
`;
