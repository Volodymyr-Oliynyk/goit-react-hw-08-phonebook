import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { BsJournalBookmarkFill } from 'react-icons/bs';
import {HiHome}from 'react-icons/hi'
import { NavBarItem, NavBarList, NavContainer } from './NavBar.styled';
import { Title } from 'components/common/TitleStyled';

export const NavBar = () => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  return (
    <NavContainer>
      <NavBarList>
        <NavBarItem>
          <Link to="/">
            <Title>
              Home <HiHome size="16px" />
            </Title>
          </Link>
        </NavBarItem>
        {isLoggedIn && (
          <NavBarItem>
            <Link to="contacts">
              <Title>Contacts <BsJournalBookmarkFill size="14px" /></Title>{' '}
            </Link>
          </NavBarItem>
        )}
      </NavBarList>
    </NavContainer>
  );
};
