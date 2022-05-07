import { Menu as MenuMock } from 'utils/Mocks/Menu';
import { Link } from "react-router-dom";
import MenuItem from "components/MenuItem";
import './styles.css';

function Menu() {
  return (
    <menu id="menuContainer">
      <ul id="menuList">
        {
          MenuMock.map((menu) => {
            return (
              <Link to={menu.to} className={menu.className}>
                <MenuItem
                  textButton={menu.content.textButton}
                  id={menu.content.id} />
              </Link>
            )
          })
        }
      </ul>
    </menu>
  );
};

export default Menu;