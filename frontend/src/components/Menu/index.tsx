import { Link } from "react-router-dom";
import MenuItem from "components/MenuItem";
import './styles.css';

function Menu() {
  return (
    <menu id="menuContainer">
      <ul id="menuList">
        <Link to="/" className="btnDecorationNone">
          <MenuItem
            textButton="Home"
            id="btnHome" />
        </Link>
        <Link to="/cursos" className="btnDecorationNone">
          <MenuItem
            textButton="Cursos"
            id="btnCursos" />
        </Link>
        <Link to="/consultas" className="btnDecorationNone">
          <MenuItem
            textButton="Consultas"
            id="btnConsultas" />
        </Link>
        <Link to="/aavet" className="btnDecorationNone">
          <MenuItem
            textButton="A Avet"
            id="btnAAvet" />
        </Link>
        <Link to="/blog" className="btnDecorationNone">
          <MenuItem
            textButton="Blog"
            id="btnBlog" />
        </Link>
        <Link to="/faleConosco" className="btnDecorationNone">
          <MenuItem
            textButton="Fale Conosco"
            id="btnFaleConosco" />
        </Link>
        <Link to="/inscricaoOnline" className="btnDecorationNone">
          <MenuItem
            textButton="Inscrição Online"
            id="btnInscricaoOnline" />
        </Link>
        <Link to="/agendarConsultaOnline" className="btnDecorationNone">
          <MenuItem
            textButton="Agendar Consulta Online"
            id="btnAgendarConsultaOnline" />
        </Link>
      </ul>
    </menu>
  );
};

export default Menu;