import { Formik, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import { register } from 'Redux/Auth/Operations';
import {
  StyledForm,
  Label,
  StyledInput,
  StyledBtn,
  Error,
} from './RegistrationForm.styled';

import * as yup from 'yup';
import YupPassword from 'yup-password';
YupPassword(yup);

const schema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email(),
  password: yup
    .string()
    .required()
    .minLowercase()
    .minUppercase()
    .minNumbers()
    .minSymbols()
    .min(5),
});

const initialValues = {
  name: '',
  email: '',
  password: '',
};

const RegistrationForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (value, { resetForm }) => {
    dispatch(register(value));
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={schema}
    >
      <StyledForm autoComplete="off">
        <Label>
          Name
          <StyledInput type="text" name="name" placeholder="Enter your name " />
          <ErrorMessage name="name">{msg => <Error>{msg}</Error>}</ErrorMessage>
        </Label>

        <Label>
          Email
          <StyledInput
            type="email"
            name="email"
            placeholder="Enter your email "
            title="Invalid email address"
          />
          <ErrorMessage name="email">
            {msg => <Error>{msg}</Error>}
          </ErrorMessage>
        </Label>

        <Label>
          Password
          <StyledInput
            type="password"
            name="password"
            placeholder="Enter password "
            title="The length of the password is at least 8. The password must contain at least 1 uppercase letter, 1 lowercase letter, 1 symbol, 1 number"
          />
          <ErrorMessage name="password">
            {() => (
              <Error>
                {
                  'The length of the password is at least 8. The password must contain at least 1 uppercase letter, 1 lowercase letter, 1 symbol, 1 number'
                }
              </Error>
            )}
          </ErrorMessage>
        </Label>

        <StyledBtn type="submit">Registration</StyledBtn>
      </StyledForm>
    </Formik>
  );
};

export default RegistrationForm;
