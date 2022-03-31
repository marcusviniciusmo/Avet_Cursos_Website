import LogoAvet from 'assets/img/header/logo.png';
import Menu from "components/Menu";

function Header() {
  return (
    <header>
      <img src={LogoAvet} alt="Avet logo" />

      <Menu />
    </header>
  );
};

export default Header;