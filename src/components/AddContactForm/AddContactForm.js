import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../Redux/Operation';
import { selectItems } from 'Redux/Selectors';

import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';

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
  number: yup.number().required(),
});

const initialValues = {
  name: '',
  number: '',
};

const toCheckName = (contacts, value) => {
  return contacts.find(
    ({ name }) => value.toLowerCase() === name.toLowerCase()
  );
};

export const AddContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectItems);

  const hendleSubmit = (values, { resetForm }) => {
    const toResultNameCheck = toCheckName(contacts, values.name);
    if (toResultNameCheck) {
      alert(`${values.name} is already in contact`);
      return;
    }
    dispatch(addContact(values));
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={hendleSubmit}
    >
      <Forms>
        <Label>
          <InputLabel>Name</InputLabel>
          <Input
            type="text"
            name="name"
            placeholder="Enter name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          />
          <ErrorMessage
            name="name"
            render={message => <Message>{`Please, enter Name`}</Message>}
          />
        </Label>
        <Label>
          <InputLabel>Number</InputLabel>
          <Input
            type="tel"
            name="number"
            placeholder="Enter phone number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
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
  hendleSubmit: PropTypes.func,
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};

export default AddContactForm;
