import { IContactAreaHeader } from 'utils/Types';
import './styles.css';

function ContactAreaHeader({ areaTitle, areaText }: IContactAreaHeader) {
  return (
    <div id="contactAreaHeaderContainer">
      <div id='contactAreaHeaderTitle'>
        <span>{areaTitle}</span>
      </div>
      <span>{areaText}</span>
    </div>
  );
};

export default ContactAreaHeader;