import { IContactInfo } from 'utils/Types';
import PhoneIcon from '@mui/icons-material/Phone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import AddLocationAltOutlinedIcon from '@mui/icons-material/AddLocationAltOutlined';

export const ContactInfos: IContactInfo[] = [
  {
    icon: PhoneIcon,
    label1: '(19) 3254-4083 // 99900-4489 (Whats)'
  },
  {
    icon: MailOutlineIcon,
    label1: 'contato@avetcursos.com.br'
  },
  {
    icon: AddLocationAltOutlinedIcon,
    label1: 'Av. Vital Brasil, 302',
    label2: 'Jd. Bela Vista - 13076-415 - Campinas/SP'
  }
];