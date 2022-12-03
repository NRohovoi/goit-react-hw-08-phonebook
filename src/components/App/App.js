import { lazy, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { refreshUser } from 'Redux/Auth/Operations';
import { selectIsRefreshing } from 'Redux/Auth/Selectors';
import HomePage from 'Pages/Home';
import SharedLayout from 'components/Phonebook/SharedLayout/SharedLayout';
import RestrictedRoute from 'components/Phonebook/RestrictedRoute/RestrictedRoute';
import PrivateRoute from 'components/Phonebook/PrivateRoute/PrivateRoute';
import UserLoader from 'components/Phonebook/UserLoader/UserLoader';

import { Box } from './App.styled';

const Registration = lazy(() => import('Pages/Registration'));
const Login = lazy(() => import('Pages/Login'));
const Contacts = lazy(() => import('Pages/Contacts'));

export const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <Box>
      {isRefreshing ? (
        <UserLoader />
      ) : (
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<HomePage />} />
            <Route
              path="/register"
              element={
                <RestrictedRoute
                  redirectTo="/contacts"
                  component={<Registration />}
                />
              }
            />
            <Route
              path="/login"
              element={
                <RestrictedRoute redirectTo="/contacts" component={<Login />} />
              }
            />
            <Route
              path="/contacts"
              element={
                <PrivateRoute redirectTo="/login" component={<Contacts />} />
              }
            />
          </Route>
        </Routes>
      )}
    </Box>
  );
};

export default App;
