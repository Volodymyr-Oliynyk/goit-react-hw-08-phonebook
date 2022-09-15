import { useSelector } from 'react-redux';
import { Navigate } from 'react-router';

export const PrivateRoute = ({ children }) => {
  const isLogged = useSelector(state => state.auth.IsLoggedIn);

  return !isLogged ? <Navigate to="/" /> : children;
};
