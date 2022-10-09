import { Component } from 'react';

import { nanoid } from 'nanoid';
import { Report } from 'notiflix/build/notiflix-report-aio';

import { AddContactForm } from './AddContactForm/AddContactForm';
import { ContactFilters } from './ContactFilters/ContactFilters';
import { ContactList } from './ContactList/ContactList';
import { Notification } from './Notification/Notification';

import { Box, Title, PhonebookIcon } from './Box.styled';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  addContact = ({ name, number }) => {
    const { contacts } = this.state;
    const newContact = { id: nanoid(), name, number };
    const inContact = contacts.some(contact => contact.name === name);
    if (inContact) {
      return Report.warning(
        `${name}`,
        'This user is already in the your contact list.',
        'OK'
      );
    } else {
      return this.setState(({ contacts }) => ({
        contacts: [newContact, ...contacts],
      }));
    }
  };

  onFilterChange = e => this.setState({ filter: e.currentTarget.value });

  filtredContactList = () =>
    this.state.contacts.filter(({ name }) =>
      name.toLowerCase().includes(this.state.filter)
    );

  onDeleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);
    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  render() {
    const { filter } = this.state;
    return (
      <Box>
        <PhonebookIcon />
        <Title>phonebook</Title>
        <AddContactForm onSubmit={this.addContact} />
        <Title>contacts</Title>
        <ContactFilters
          contactList={filter}
          onFilterChange={this.onFilterChange}
        />
        {this.state.contacts.length > 0 ? (
          <ContactList
            filtredContactList={this.filtredContactList()}
            onDeleteContact={this.onDeleteContact}
          />
        ) : (
          <Notification message="Contact list is empty." />
        )}
      </Box>
    );
  }
}
export default App;
