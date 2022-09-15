import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from 'redux/auth/authOperation';
import { Navigate } from 'react-router';
import { Button } from 'components/common/ButtonStyled';
import { ImExit } from 'react-icons/im';
import { getUserName } from 'redux/auth/authSelector';
import { UserMenuContainer } from './UserMenu.styles';

export const UserMenu = () => {
  // const name = useSelector(state => state.auth.name);
  const isLogged = useSelector(state => state.auth.isLoggedIn);
  const dispatch = useDispatch();
  const userName = useSelector(getUserName);

  const logoutHandler = () => {
    dispatch(logoutUser());
    <Navigate to="/" replace={true} />;
  };

  return (
    <>
      {isLogged && (
        <UserMenuContainer>
          <p>{userName}</p>
          <Button type="button" onClick={logoutHandler}>
            LogOut 
            <ImExit size="16px"/>
          </Button>
        </UserMenuContainer>
        
          
  
        )}
    </>
  );
};
