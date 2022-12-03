import PropTypes from 'prop-types';
import ContactItem from 'components/Phonebook/Contacts/ContactItem/ContactItem';
import { useSelector } from 'react-redux';
import { selectVisibilityContacts } from 'Redux/Contacts/Selectors';

export const ContactList = () => {
  const contacts = useSelector(selectVisibilityContacts);
  return (
    <ul>
      {contacts.map(contact => {
        return <ContactItem key={contact.id} contact={contact} />;
      })}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};

export default ContactList;
