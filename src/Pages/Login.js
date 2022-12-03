import LoginForm from 'components/Phonebook/Nav/Login/LoginForm';
import { Title } from 'components/Phonebook/Contacts/PageStyled/ToPage.styled';

const LoginPage = () => {
  return (
    <main>
      <Title>Log in of your account</Title>
      <LoginForm />
    </main>
  );
};

export default LoginPage;
