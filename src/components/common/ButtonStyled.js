import styled from 'styled-components';

export const Button = styled.button`
display: inline-flex;
align-items: center;
  padding: 5px 10px;
  margin: 5px 10px;
  text-transform: capitalize;
  background-color: ${p => p.theme.colors.backgroundButton};
  border: none;
  border-radius: 5px;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
  cursor: pointer;
  :hover {
    background-color: blue;
  }
`;

export const SecondaryButton = styled.button`
  display: block;
  padding: 5px 20px;
  border: none;
  border-radius: 2px;
  outline: none;
  background-color: #d45b78;
  color: white;
  cursor: pointer;
  transition: all 250ms ease-in-out;
  @media screen and (max-width: 425px) {
    padding: 3px 10px;
    font-size: 9px;
  }
  &:hover {
    box-shadow: 5px 5px 18px -3px rgba(255, 255, 255, 0.67);
  }
`;
