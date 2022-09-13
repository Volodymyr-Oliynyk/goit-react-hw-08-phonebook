import { useSelector } from 'react-redux';
import { Navigate } from 'react-router';
// import { getIsLoggedIn } from 'redux/auth/authSelector';

export const PublicRoute = ({ children, restricted = false }) => {
  const isLogged = useSelector(state => state.auth.isLogged);

  const redirect = isLogged && restricted;

  return redirect ? <Navigate to="/" /> : children;
};
