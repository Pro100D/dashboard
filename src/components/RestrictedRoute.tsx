import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { isAuthSelector } from '../redux/auth/selectors';
export type RedirectProps = {
  component: React.ReactElement;
  redirectTo: string;
};
export const RestrictedRoute = ({
  component: Component,
  redirectTo = '/',
}: RedirectProps) => {
  const isAuth = useSelector(isAuthSelector);

  return isAuth ? <Navigate to={redirectTo} /> : Component;
};
