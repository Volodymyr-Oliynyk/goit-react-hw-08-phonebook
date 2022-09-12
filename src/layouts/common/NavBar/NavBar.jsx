import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
// import { RiHome7Fill } from 'react-i';

export const NavBar = () => {
  const isLogged = useSelector(state => state.auth.isLogged);
  return (
    <ul>
      <li>
        <Link to="/">
          {/* <RiHome7Fill size="20px" /> */}
        </Link>
      </li>
      {isLogged && (
        <li>
          <Link to="contacts">Contacts</Link>
        </li>
      )}
    </ul>
  );
};
