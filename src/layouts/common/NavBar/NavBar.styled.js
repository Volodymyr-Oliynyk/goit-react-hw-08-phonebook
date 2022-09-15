import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-right: auto;
`;
export const NavBarList = styled.ul`
  display: flex;
  align-items: center;
  /* justify-content: space-between; */
  padding-left: 0;
  margin-right: 40px;
`;

export const NavBarItem = styled.li`
  &:not(:last-child) {
    margin-right: 10px;
  }
`;

export const NavBarLink = styled(NavLink)`
  display: block;
  position: relative;
  font-size: ${p => p.theme.fontSizes.sm};
  font-weight: bold;
  text-transform: uppercase;
  color: white;
  &.active::after {
    content: '';
    display: block;
    position: absolute;
    bottom: -3px;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: white;
    border-radius: 2px;
  }
`;
