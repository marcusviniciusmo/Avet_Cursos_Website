import { Link } from "react-router-dom";
import MenuItem from "components/MenuItem";

function Menu() {
  return (
    <>
      <h2>MENU Component</h2>
      <Link to="/">
        <h4><MenuItem textButton="Home" /></h4>
      </Link>
      <Link to="/cursos">
        <h4><MenuItem textButton="Cursos" /></h4>
      </Link>
      <Link to="/consultas">
        <h4><MenuItem textButton="Consultas" /></h4>
      </Link>
      <Link to="/aavet">
        <h4><MenuItem textButton="A Avet" /></h4>
      </Link>
      <Link to="/blog">
        <h4><MenuItem textButton="Blog" /></h4>
      </Link>
      <Link to="/faleConosco">
        <h4><MenuItem textButton="Fale Conosco" /></h4>
      </Link>
      <Link to="/inscricaoOnline">
        <h4><MenuItem textButton="Inscrição Online" /></h4>
      </Link>
      <Link to="/agendarConsultaOnline">
        <h4><MenuItem textButton="Agendar Consulta Online" /></h4>
      </Link>
    </>
  );
};

export default Menu;