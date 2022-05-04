import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ContactButton from 'components/ContactButton';
import './styles.css';

function ContactInfoButtonArea() {
  return (
    <div id='contactInfoButtonAreaContainer'>
      <div className='contactButton whatsappButton'>
        <span>Whatsapp</span>
        <WhatsAppIcon />
      </div>
      <ContactButton
        label='Whatsapp'
        IconUI={WhatsAppIcon}
        className={'whatsappButton'}
      />

      <div className='contactButton mensagemButton'>
        <span>Mensagem</span>
        <ArrowForwardIcon />
      </div>
      <ContactButton
        label='Mensagem'
        IconUI={ArrowForwardIcon}
        className={'mensagemButton'}
      />
    </div>
  );
};

export default ContactInfoButtonArea;