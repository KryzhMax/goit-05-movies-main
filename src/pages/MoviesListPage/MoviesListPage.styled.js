import styled from 'styled-components';
import { device } from 'utils/device';

export const ButtonStyled = styled.button`
  min-width: 150px;
  border-radius: 4px;
  background-color: rgb(85, 26, 139);
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
    background-color: rgb(2, 0, 36);
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const SectionContainer = styled.div`
  padding: 20px 50px;
`;

export const InputStyled = styled.input`
  width: 100%;
  padding: 12px 16px;
  border-radius: 4px;
  border: 2px solid rgb(85, 26, 139);
  font-size: 16px;
  @media ${device.mobile} {
  }
  @media ${device.fablet} {
  }
  @media ${device.desktop} {
  } ;
`;

export const FormStyled = styled.form`
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
  max-width: 320px;
  margin: 0 auto;

  @media ${device.fablet} {
    max-width: 400px;
  }
`;
