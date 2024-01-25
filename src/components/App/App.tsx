import { Route, Routes } from 'react-router-dom';

import { Landing } from 'pages/Landing';
import { Dashboard } from 'pages/Dashboard';
import { RestrictedRoute } from 'components/RestrictedRoute';
import { useDispatch, useSelector } from 'react-redux';
import { refreshingUser } from '../../redux/auth/operations';
import { useEffect } from 'react';
import { PrivateRoute } from 'components/PrivateRoute';
import { AppDispatch } from 'redux/store';
import { refreshingUserSelector } from '../../redux/auth/selectors';

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
    <div>Loading...</div>
  );
};

export default App;
