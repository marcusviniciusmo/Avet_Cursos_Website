import { IContactButton } from 'utils/Types';

function ContactButton({ label, IconUI, className }: IContactButton) {
  return (
    <>
      <span>{label}</span>
      <IconUI />
    </>
  );
};

export default ContactButton;