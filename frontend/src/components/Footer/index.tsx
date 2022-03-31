import { GetCurrentYear } from 'utils/Functions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDog } from '@fortawesome/free-solid-svg-icons';

function Footer() {
  const copyright = '\u00a9';

  return (
    <>
      <h1>FOOTER Component</h1>
      <h4>
        {(`${copyright} ${GetCurrentYear()} Avet Cursos.
          Todos os direitos reservados.`)}
      </h4>

      <div id='footerIcon'>
        <FontAwesomeIcon icon={faDog} />
      </div>
    </>
  );
};

export default Footer;