import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'Redux/Auth/Selectors';
import { Header } from './AppBar.styled';
import UserMenu from 'components/Phonebook/Nav/UserMenu/UserMenu';
import Navigation from 'components/Phonebook/Nav/Navigation/Navigation';

const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <Header>
      <Navigation />
      {isLoggedIn && <UserMenu />}
    </Header>
  );
};

export default AppBar;
