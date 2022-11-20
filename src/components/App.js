import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchContacts } from '../Redux/Operation';
import { selectIsLoading, selectError } from '../Redux/Selectors';

import { AddContactForm } from './AddContactForm/AddContactForm';
import { ContactFilters } from './ContactFilters/ContactFilters';
import { ContactList } from './ContactList/ContactList';
import { Loader } from './Loader/Loader';

import {
  Box,
  Title,
  PhonebookIcon,
  LoaderBox,
  ErrorMessage,
} from './App.styled';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Box>
      <PhonebookIcon />
      <Title>phonebook</Title>
      <AddContactForm />
      <Title>contacts</Title>
      <ContactFilters />
      <LoaderBox>
        {isLoading && !error && <Loader />}
        {error && <ErrorMessage>{error}</ErrorMessage>}
      </LoaderBox>
      <ContactList />
    </Box>
  );
};

export default App;
