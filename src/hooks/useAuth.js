import { useSelector } from 'react-redux';
import {getUserName} from 'redux/auth/authSelectors';

export const useAuth = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
//   const isRefreshing = useSelector(authSelectors.getIsRefreshingUser);
  const user = useSelector(getUserName);

  return {
    isLoggedIn,
    // isRefreshing,
    user,
  };
};