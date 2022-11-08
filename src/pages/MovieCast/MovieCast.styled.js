import styled from 'styled-components';

export const ItemStyled = styled.li`
  width: 250px;
  background-color: rgba(100, 43, 115, 0.3);
  box-shadow: 0px 11px 15px -1px rgba(161, 161, 161, 0.64);
  transition: transform 300ms linear;

  &:hover,
  &:focus {
    transform: scale(1.1);
  }
`;

export const Img = styled.img`
  width: 100%;
`;

export const SectionContainer = styled.div`
  padding: 20px 50px;
`;
