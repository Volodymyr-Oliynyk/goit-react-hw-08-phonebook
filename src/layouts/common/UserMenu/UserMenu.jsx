import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from 'redux/auth/authOperation';
import { Navigate } from 'react-router';
import { Button } from 'components/common/ButtonStyled';
import { Link } from 'react-router-dom';

export const UserMenu = () => {
  const name = useSelector(state => state.auth.name);
  const isLogged = useSelector(state => state.auth.isLogged);
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logoutUser());
    <Navigate to="/" replace={true} />;
  };

  return (
    <>
      {isLogged ? (
        <div>
          <p>You are logged in as: {name}</p>
          <Button type="button" onClick={logoutHandler}>
            EXIT
          </Button>
        </div>
      ) : (
        <ul>
          <li>
            <Link to="register">Register</Link>
          </li>
          <li>
            <Link to="login">LogIn</Link>
          </li>
        </ul>
      )}
    </>
  );
};
