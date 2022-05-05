import { IContactButton } from 'utils/Types';
import './styles.css';

function ContactButton({ label, IconUI, className }: IContactButton) {
  return (
    <div id='contactButtonContainer' className={className}>
      <span>{label}</span>
      <IconUI />
    </div>
  );
};

export default ContactButton;