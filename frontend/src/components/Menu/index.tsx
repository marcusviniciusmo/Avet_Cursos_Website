import { Link } from "react-router-dom";
import MenuItem from "components/MenuItem";

function Menu() {
  return (
    <>
      <h2>MENU Component</h2>
      <Link to="/">
        <h4><MenuItem
          textButton="Home"
          id="btnHome" /></h4>
      </Link>
      <Link to="/cursos">
        <h4><MenuItem
          textButton="Cursos"
          id="btnCursos" /></h4>
      </Link>
      <Link to="/consultas">
        <h4><MenuItem
          textButton="Consultas"
          id="btnConsultas" /></h4>
      </Link>
      <Link to="/aavet">
        <h4><MenuItem
          textButton="A Avet"
          id="btnAAvet" /></h4>
      </Link>
      <Link to="/blog">
        <h4><MenuItem
          textButton="Blog"
          id="btnBlog" /></h4>
      </Link>
      <Link to="/faleConosco">
        <h4><MenuItem
          textButton="Fale Conosco"
          id="btnFaleConosco" /></h4>
      </Link>
      <Link to="/inscricaoOnline">
        <h4><MenuItem
          textButton="Inscrição Online"
          id="btnInscricaoOnline" /></h4>
      </Link>
      <Link to="/agendarConsultaOnline">
        <h4><MenuItem
          textButton="Agendar Consulta Online"
          id="btnAgendarConsultaOnline" /></h4>
      </Link>
    </>
  );
};

export default Menu;