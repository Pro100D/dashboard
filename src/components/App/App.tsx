import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import { AppDispatch } from 'redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { refreshingUser } from '../../redux/auth/operations';
import { refreshingUserSelector } from '../../redux/auth/selectors';

import { Spinner } from 'components/shared/Spinner/Spinner';
import { PrivateRoute } from 'components/PrivateRoute';
import { RestrictedRoute } from 'components/RestrictedRoute';

import { Dashboard } from 'pages/Dashboard';
import { Landing } from 'pages/Landing';
import { Backdrop } from 'components/shared/Backdrop/Backdrop';

export const App = () => {
  const dispatch = useDispatch<AppDispatch>();
  const isRefreshing = useSelector(refreshingUserSelector);

  useEffect(() => {
    dispatch(refreshingUser());
  }, [dispatch]);

  return !isRefreshing ? (
    <Routes>
      <Route
        path="/"
        element={
          <RestrictedRoute redirectTo="/dashboard" component={<Landing />} />
        }
      />
      <Route
        path="/dashboard"
        element={<PrivateRoute redirectTo="/" component={<Dashboard />} />}
      />
    </Routes>
  ) : (
    <Backdrop>
      <Spinner />
    </Backdrop>
  );
};

export default App;
