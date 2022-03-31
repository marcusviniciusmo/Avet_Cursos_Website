import { Link } from "react-router-dom";
import MenuItem from "components/MenuItem";
import './styles.css';

function Menu() {
  return (
    <menu id="menuContainer">
      <ul id="menuList">
        <Link to="/">
          <MenuItem
            textButton="Home"
            id="btnHome" />
        </Link>
        <Link to="/cursos">
          <MenuItem
            textButton="Cursos"
            id="btnCursos" />
        </Link>
        <Link to="/consultas">
          <MenuItem
            textButton="Consultas"
            id="btnConsultas" />
        </Link>
        <Link to="/aavet">
          <MenuItem
            textButton="A Avet"
            id="btnAAvet" />
        </Link>
        <Link to="/blog">
          <MenuItem
            textButton="Blog"
            id="btnBlog" />
        </Link>
        <Link to="/faleConosco">
          <MenuItem
            textButton="Fale Conosco"
            id="btnFaleConosco" />
        </Link>
        <Link to="/inscricaoOnline">
          <MenuItem
            textButton="Inscrição Online"
            id="btnInscricaoOnline" />
        </Link>
        <Link to="/agendarConsultaOnline">
          <MenuItem
            textButton="Agendar Consulta Online"
            id="btnAgendarConsultaOnline" />
        </Link>
      </ul>
    </menu>
  );
};

export default Menu;