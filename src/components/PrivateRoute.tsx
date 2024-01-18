import { useSelector } from 'react-redux';
import {
  isAuthSelector,
  refreshingUserSelector,
} from '../redux/auth/selectors';
import { Navigate } from 'react-router-dom';
import { RedirectProps } from './RestrictedRoute';

export const PrivateRoute = ({
  component: Component,
  redirectTo = '/',
}: RedirectProps) => {
  const isRefreshing = useSelector(refreshingUserSelector);
  const isAuth = useSelector(isAuthSelector);
  const shouldRedirect = !isAuth && !isRefreshing;

  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};
