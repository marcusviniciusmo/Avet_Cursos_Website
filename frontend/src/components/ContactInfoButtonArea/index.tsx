import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import './styles.css';

function ContactInfoButtonArea() {
  return (
    <div id='contactInfoButtonAreaContainer'>
      <div className='contactButton whatsappButton'>
        <span>Whatsapp</span>
        <WhatsAppIcon />
      </div>

      <div className='contactButton mensagemButton'>
        <span>Mensagem</span>
        <ArrowForwardIcon />
      </div>
    </div>
  );
};

export default ContactInfoButtonArea;