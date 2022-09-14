import { useSelector } from 'react-redux';
import {getUserName, getIsLoggedIn} from 'redux/auth/authSelectors';

export const useAuth = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);
//   const isRefreshing = useSelector(authSelectors.getIsRefreshingUser);
  const user = useSelector(getUserName);

  return {
    isLoggedIn,
    // isRefreshing,
    user,
  };
};