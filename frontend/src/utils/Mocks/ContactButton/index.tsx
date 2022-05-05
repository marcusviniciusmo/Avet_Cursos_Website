import { IContactButton } from 'utils/Types';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export const ContactButtons: IContactButton[] = [
  {
    label: 'Whatsapp',
    IconUI: WhatsAppIcon,
    className: 'contactButtonWhatsapp'
  },
  {
    label: 'Mensagem',
    IconUI: ArrowForwardIcon,
    className: 'contactButtonMensagem'
  }
];