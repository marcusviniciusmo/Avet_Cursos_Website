import { Header as HeaderMock } from 'utils/Mocks/Header';
import Menu from "components/Menu";
import './styles.css';

function Header() {
  return (
    <header id='headerContainer'>
      <img
        src={HeaderMock.content.url}
        alt={HeaderMock.content.description} />

      <Menu />
    </header>
  );
};

export default Header;