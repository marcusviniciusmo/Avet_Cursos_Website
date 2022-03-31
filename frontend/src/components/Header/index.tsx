import LogoAvet from 'assets/img/header/logo.png';
import Menu from "components/Menu";
import './styles.css';

function Header() {
  return (
    <header id='headerContainer'>
      <img src={LogoAvet} alt="Avet logo" />

      <Menu />
    </header>
  );
};

export default Header;