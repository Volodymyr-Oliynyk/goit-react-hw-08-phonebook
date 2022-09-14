import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { BsJournalBookmarkFill } from 'react-icons/bs';
import { List } from 'components/ContactList/ContactList.styled';

export const NavBar = () => {
  const isLogged = useSelector(state => state.auth.isLogged);
  return (
    <List >
      <li>
        <Link to="/">
          <h1>Phonebook  <BsJournalBookmarkFill size="20px" /></h1>
          
        </Link>
      </li>
      {isLogged && (
        <li>
          <Link to="contacts">Contacts</Link>
        </li>
      )}
    </List>
  );
};
