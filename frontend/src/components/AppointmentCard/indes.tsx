import { ToUpperCaseText } from 'utils/Functions';
import './styles.css';

type Props = {
  imageUrl: string,
  imageDescription: string,
  label: string
};

function AppointmentCard({ imageUrl, imageDescription, label }: Props) {
  return (
    <div id='appointmentCardContainer'>
      <div id="appointmentCardLogoContainer">
        <img src={imageUrl} alt={imageDescription} />
      </div>
      <span>{ToUpperCaseText(label)}</span>
    </div>
  );
};

export default AppointmentCard;