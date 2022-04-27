import PhoneIcon from '@mui/icons-material/Phone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import AddLocationAltOutlinedIcon from '@mui/icons-material/AddLocationAltOutlined';
import './styles.css';

function ContactInfo() {
  return (
    <div id='contactInfoContainer'>
      <div className='contactInfoRow'>
        <PhoneIcon />
        <span>(19) 3254-4083 // 99900-4489 (Whats)</span>
      </div>

      <div className='contactInfoRow'>
        <MailOutlineIcon />
        <span>contato@avetcursos.com.br</span>
      </div>

      <div className='contactInfoRow'>
        <AddLocationAltOutlinedIcon />
        <span>
          Av. Vital Brasil, 302<br /> Jd. Bela Vista - 13076-415 - Campinas/SP
        </span>
      </div>
    </div>
  );
};

export default ContactInfo;