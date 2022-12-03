import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Loader from 'components/Phonebook/Loader/Loader';
import AppBar from 'components/Phonebook/Nav/AppBar/AppBar';
import { PhonebookIcon } from './SharedLayout.styled';

const SharedLayout = () => {
  return (
    <div>
      <AppBar />
      <PhonebookIcon />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default SharedLayout;
