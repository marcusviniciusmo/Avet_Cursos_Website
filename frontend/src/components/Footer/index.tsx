import { Footer as FooterMock } from 'utils/Mocks/Footer';
import { ToUpperCaseText } from 'utils/Functions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './styles.css';

function Footer() {
  return (
    <footer id='footerContainer'>
      <span>
        {
          ToUpperCaseText(
            `${FooterMock.copyrightSymbol}
            ${FooterMock.getYear()}
            ${FooterMock.text}`
          )
        }
      </span>

      <div id='footerIcon'>
        <FontAwesomeIcon icon={FooterMock.iconFontAwesome} />
      </div>
    </footer>
  );
};

export default Footer;