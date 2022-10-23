import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { Report } from 'notiflix/build/notiflix-report-aio';

import { AddContactForm } from './AddContactForm/AddContactForm';
import { ContactFilters } from './ContactFilters/ContactFilters';
import { ContactList } from './ContactList/ContactList';
import { Notification } from './Notification/Notification';

import { Box, Title, PhonebookIcon } from './App.styled';

export const App = () => {
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem('contacts')) || []
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = ({ name, number }) => {
    const newContact = { id: nanoid(), name, number };

    const someContacts = contacts.some(contact => contact.name === name);

    someContacts
      ? Report.warning(
          `${name}`,
          'This user is already in the contact list.',
          'OK'
        )
      : setContacts(prevContacts => [newContact, ...prevContacts]);
  };

  const onFilterChange = e => setFilter(e.currentTarget.value);

  const filtredContactList = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const onDeleteContact = contactId => {
    setContacts(contacts =>
      contacts.filter(contact => contact.id !== contactId)
    );
  };

  return (
    <Box>
      <PhonebookIcon />
      <Title>phonebook</Title>
      <AddContactForm onSubmit={addContact} />
      <Title>contacts</Title>
      <ContactFilters contactList={filter} onFilterChange={onFilterChange} />
      {contacts.length > 0 ? (
        <ContactList
          filtredContactList={filtredContactList()}
          onDeleteContact={onDeleteContact}
        />
      ) : (
        <Notification message="Contact list is empty." />
      )}
    </Box>
  );
};

export default App;
