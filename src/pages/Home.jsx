import { Button } from 'components/common/ButtonStyled';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { logoutUser } from 'redux/auth/authOperation';
import { getIsLoggedIn, getUserName } from 'redux/auth/authSelector';
// import ContactsPage from './ContactsPage/ContactsPage';
import { HomeContainer, HomeLink } from './Home.styled';

const StartPage = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const userName = useSelector(getUserName);
  const dispatch = useDispatch();

  return (
    <HomeContainer>
      <title>Home</title>

      <h3>
        Welcome, {isLoggedIn ? <span>{userName}!</span> : <span>user!</span>}
      </h3>

      <h3>You are in the Phonebook app</h3>
      {isLoggedIn ? (
        <>
        <p>To add a new contact</p>
          <Link to="/contacts"> Click here </Link>
          <p>
            If you want to leave your account, click here -{' '}
            <Button onClick={() => dispatch(logoutUser())}>LogOut</Button>
          </p>
        </>
      ) : (
        <div>
          <p>
            To sign in to your account, click here -{' '}
            <HomeLink to="/login">LogIn</HomeLink>
          </p>
          <p>
            If you don't have an account, click here -{' '}
            <HomeLink to="/register">SignUp</HomeLink>
          </p>
        </div>
      )}
    </HomeContainer>
  );
};

export default StartPage;
