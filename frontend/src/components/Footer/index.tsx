import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDog } from '@fortawesome/free-solid-svg-icons';

function Footer() {
  return (
    <>
      <h1>FOOTER Component</h1>
      <h4>&copy; 2017 Avet Cursos. Todos os direitos reservados.</h4>
      <FontAwesomeIcon icon={faDog} />
    </>
  );
};

export default Footer;