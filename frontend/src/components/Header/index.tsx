import { Header as HeaderMock } from 'utils/Mocks/Header';
import Menu from "components/Menu";
import './styles.css';

function Header() {
  return (
    <header id='headerContainer'>
      <img
        src={HeaderMock.imageUrl}
        alt={HeaderMock.imageDescription} />

      <Menu />
    </header>
  );
};

export default Header;