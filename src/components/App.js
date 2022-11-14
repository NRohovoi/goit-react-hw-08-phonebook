import { AddContactForm } from './AddContactForm/AddContactForm';
import { ContactFilters } from './ContactFilters/ContactFilters';
import { ContactList } from './ContactList/ContactList';

import { Box, Title, PhonebookIcon } from './App.styled';

export const App = () => {
  return (
    <Box>
      <PhonebookIcon />
      <Title>phonebook</Title>
      <AddContactForm />
      <Title>contacts</Title>
      <ContactFilters />
      <ContactList />
    </Box>
  );
};

export default App;
