import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { selectItems } from 'Redux/Contacts/Selectors';
import { addContact } from 'Redux/Contacts/Operations';

import * as yup from 'yup';
import 'yup-phone';
import { Formik, ErrorMessage } from 'formik';

import {
  Label,
  InputLabel,
  Button,
  ButtonIcon,
  Forms,
  Input,
  Message,
} from './AddContactForm.styled';

const schema = yup.object().shape({
  name: yup.string().required(),
  number: yup.string().phone().required(),
});

const initialValues = {
  name: '',
  number: '+',
};

const toCheckName = (contacts, value) => {
  return contacts.find(
    ({ name }) => value.toLowerCase() === name.toLowerCase()
  );
};

const AddContactForm = ({ onClose }) => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectItems);

  const handleSubmit = (value, { resetForm }) => {
    const toResultNameCheck = toCheckName(contacts, value.name);
    if (toResultNameCheck) {
      alert(`${value.name} is already in contact`);
      return;
    }
    dispatch(addContact(value));
    resetForm();
    onClose(false);
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={schema}
    >
      <Forms autoComplete="off">
        <Label>
          <InputLabel>Name</InputLabel>
          <Input
            type="text"
            name="name"
            placeholder="Enter name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <ErrorMessage
            name="name"
            render={message => <Message>{`Please, enter Name`}</Message>}
          />
        </Label>

        <Label>
          <InputLabel>Phone number</InputLabel>
          <Input
            type="tel"
            name="number"
            placeholder="Enter phone number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses"
            required
          />
          <ErrorMessage
            name="number"
            render={message => <Message>{`Please, enter Number`}</Message>}
          />
        </Label>
        <Button type="submit">
          <ButtonIcon />
          Add contact
        </Button>
      </Forms>
    </Formik>
  );
};

AddContactForm.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};

export default AddContactForm;
