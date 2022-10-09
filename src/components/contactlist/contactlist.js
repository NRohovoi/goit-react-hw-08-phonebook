import PropTypes from 'prop-types';

import {
  ContactItem,
  ContactIcon,
  ContactData,
  Buttom,
  ButtonIcon,
} from './ContactList.styled';
export const ContactList = ({ filtredContactList, onDeleteContact }) => {
  return (
    <ul>
      {filtredContactList.map(({ id, name, number }) => {
        return (
          <ContactItem key={id}>
            <ContactIcon />
            <ContactData>{name}</ContactData>
            <ContactData>{number}</ContactData>
            <Buttom type="button" onClick={() => onDeleteContact(id)}>
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
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
