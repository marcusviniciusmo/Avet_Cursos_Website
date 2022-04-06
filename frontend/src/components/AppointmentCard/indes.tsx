import './styles.css';

type Props = {
  imageUrl: string,
  imageDescription: string,
  label: string
};

function AppointmentCard({ imageUrl, imageDescription, label }: Props) {
  return (
    <>
      <div id="appointmentCardLogoContainer">
        <img src={imageUrl} alt={imageDescription} />
      </div>
      <span>{label}</span>
    </>
  );
};

export default AppointmentCard;