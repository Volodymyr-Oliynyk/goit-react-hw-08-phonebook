import { Button } from 'components/common/ButtonStyled';
import { useDispatch, useSelector } from 'react-redux';

import { logoutUser } from 'redux/auth/authOperation';
import { getIsLoggedIn, getUserName } from 'redux/auth/authSelector';

import { HomeContainer, HomeLink, HomeTitle, HomeText } from './Home.styled';

import { ImExit } from 'react-icons/im';

const StartPage = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const userName = useSelector(getUserName);
  const dispatch = useDispatch();

  return (
    <HomeContainer>
      <HomeTitle>
        Welcome, {isLoggedIn ? <span>{userName}!</span> : <span>user!</span>}
      </HomeTitle>

      <HomeTitle>You are in the Phonebook app</HomeTitle>
      {isLoggedIn ? (
        <>
          <HomeText>To add a new contact</HomeText>
          <HomeLink to="/contacts"> Click here </HomeLink>
          <p>
            If you want to leave your account, click here -{' '}
            <Button onClick={() => dispatch(logoutUser())}>
              LogOut <ImExit size="16px"  />
            </Button>
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
