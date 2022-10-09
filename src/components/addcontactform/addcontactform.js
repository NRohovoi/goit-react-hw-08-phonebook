import PropTypes from 'prop-types';
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
export const AddContactForm = ({ onSubmit }) => {
  const hendleSubmit = (values, { resetForm }) => {
    onSubmit(values);
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
  onSubmit: PropTypes.func.isRequired,
};
