import { ContactButtons } from 'utils/Mocks/ContactButton';
import ContactButton from 'components/ContactButton';
import './styles.css';

function ContactInfoButtonArea() {
  return (
    <div id='contactInfoButtonAreaContainer'>
      {
        ContactButtons.map((button) => {
          return (
            <ContactButton
              label={button.label}
              IconUI={button.IconUI}
              className={button.className}
            />
          )
        })
      }
    </div>
  );
};

export default ContactInfoButtonArea;