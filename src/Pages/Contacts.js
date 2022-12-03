import ContactList from 'components/Phonebook/Contacts/ContactList/ContactList';
import Filter from 'components/Phonebook/Contacts/ContactsFilter/ContactFilter';
import AddContactForm from 'components/Phonebook/Contacts/AddContactForm/AddContactForm';
import Modal from 'components/Phonebook/Modal/Modal';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getContacts } from 'Redux/Contacts/Operations';
import {
  Main,
  Wrapper,
  Button,
  ButtonIcon,
} from 'components/Phonebook/Contacts/PageStyled/ContactPage.styled';

const Contacts = () => {
  const [isModalOpen, seIsModalOpen] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  return (
    <>
      <Main>
        <Wrapper>
          <Filter />
          <Button type="button" onClick={() => seIsModalOpen(true)}>
            <ButtonIcon />
            Add contact
          </Button>
        </Wrapper>
        <ContactList />
      </Main>

      {isModalOpen && (
        <Modal onClose={seIsModalOpen}>
          <AddContactForm onClose={seIsModalOpen} />
        </Modal>
      )}
    </>
  );
};

export default Contacts;
