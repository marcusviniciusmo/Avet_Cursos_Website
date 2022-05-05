import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ContactButton from 'components/ContactButton';
import './styles.css';

function ContactInfoButtonArea() {
  return (
    <div id='contactInfoButtonAreaContainer'>
      <ContactButton
        label='Whatsapp'
        IconUI={WhatsAppIcon}
        className={'contactButtonWhatsapp'}
      />

      <ContactButton
        label='Mensagem'
        IconUI={ArrowForwardIcon}
        className={'contactButtonMensagem'}
      />
    </div>
  );
};

export default ContactInfoButtonArea;