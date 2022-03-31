import { GetCurrentYear, ToUpperCaseText } from 'utils/Functions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDog } from '@fortawesome/free-solid-svg-icons';
import './styles.css';

function Footer() {
  const copyright = '\u00a9';
  return (
    <footer id='footerContainer'>
      <span>
        {
          ToUpperCaseText(
            `${copyright} ${GetCurrentYear()} Avet Cursos.
              Todos os direitos reservados.`
          )
        }
      </span>

      <div id='footerIcon'>
        <FontAwesomeIcon icon={faDog} />
      </div>
    </footer>
  );
};

export default Footer;