import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from 'redux/auth/authOperation';
import { Navigate } from 'react-router';
import {  SecondaryButton } from 'components/common/ButtonStyled';
import { NavBarLink } from '../NavBar/NavBar.styled';

export const UserMenu = () => {
  const name = useSelector(state => state.auth.name);
  const isLogged = useSelector(state => state.auth.isLoggedIn);
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
          <SecondaryButton type="button" onClick={logoutHandler}>
            LogOut
          </SecondaryButton>
        </div>
      ) : (
        <ul>
          <li>
            <NavBarLink to="register">Register</NavBarLink>
          </li>
          <li>
            <NavBarLink to="login">LogIn</NavBarLink>
          </li>
        </ul>
      )}
    </>
  );
};
