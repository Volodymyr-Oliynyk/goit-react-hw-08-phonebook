import { Button } from 'components/common/ButtonStyled';
import { Helmet } from 'react-helmet';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../redux/auth/authOperation';
import { getIsLoggedIn, getUserName } from 'redux/auth/authSelector';
import { Link } from 'react-router-dom';

const StartPage = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const userName = useSelector(getUserName);
  const dispatch = useDispatch();

  return (
    <div>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <h1>
        Welcome, {isLoggedIn ? <span>{userName}!</span> : <span>user!</span>}
      </h1>

      <h2>You are in the Phonebook app</h2>
      {isLoggedIn ? (
        <div>
          <p>
            If you want to leave your account, click here -{' '}
            <Button onClick={() => dispatch(logoutUser())}>LogOut</Button>
          </p>
        </div>
      ) : (
        <div>
          <p>
            To sign in to your account, click here -{' '}
            <Link to="/login">LogIn</Link>
          </p>
          <p>
            If you don't have an account, click here -{' '}
            <Link to="/register">SignUp</Link>
          </p>
        </div>
      )}
    </div>
  );
};

export default StartPage;
