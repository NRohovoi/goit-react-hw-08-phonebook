import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../Redux/Operation';
import { selectVisibleContacts } from '../../Redux/Selectors';

import {
  ContactItem,
  ContactIcon,
  ContactData,
  Buttom,
  ButtonIcon,
} from './ContactList.styled';

export const ContactList = () => {
  const dispatch = useDispatch();
  const filtredContactList = useSelector(selectVisibleContacts);
  return (
    <ul>
      {filtredContactList.map(({ id, name, number }) => {
        return (
          <ContactItem key={id}>
            <ContactIcon />
            <ContactData>{name}</ContactData>
            <ContactData>{number}</ContactData>
            <Buttom type="button" onClick={() => dispatch(deleteContact(id))}>
              <ButtonIcon />
            </Buttom>
          </ContactItem>
        );
      })}
    </ul>
  );
};

ContactList.propTypes = {
  filtredContactList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};

export default ContactList;
