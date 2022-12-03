import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'Redux/Contacts/Operations';

import {
  ContactsItem,
  ContactIcon,
  ContactData,
  Buttom,
  ToCall,
  CallIcon,
  ButtonIcon,
} from './ContactItem.styled';

const ContactItem = ({ contact }) => {
  const dispatch = useDispatch();
  const { id, name, number } = contact;
  return (
    <ContactsItem key={id}>
      <ContactIcon />
      <ContactData>{name}</ContactData>
      <ContactData>{number}</ContactData>
      <ToCall href={`tel:${number}`} title="Call">
        <CallIcon />
      </ToCall>
      <Buttom type="button" onClick={() => dispatch(deleteContact(id))}>
        <ButtonIcon />
      </Buttom>
    </ContactsItem>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.exact({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
};

export default ContactItem;
