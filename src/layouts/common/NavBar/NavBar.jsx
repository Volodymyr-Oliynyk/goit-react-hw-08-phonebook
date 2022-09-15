import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { BsJournalBookmarkFill } from 'react-icons/bs';
import { List } from 'components/ContactList/ContactList.styled';
import { NavBarItem } from './NavBar.styled';

export const NavBar = () => {
  const isLogged = useSelector(state => state.auth.isLoggedIn);
  return (
    <List>
      {isLogged ? (
        <NavBarItem>
          <Link to="contacts"> Contacts  </Link>
        </NavBarItem>
      ) : (
        <NavBarItem>
          <Link to="/">
            <h1>
              Phonebook <BsJournalBookmarkFill size="20px" />
            </h1>
          </Link>
          </NavBarItem>
      )}
    </List>
  );
};
