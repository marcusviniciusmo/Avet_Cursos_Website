import { IAppointmentCard } from 'utils/Types';
import { ToUpperCaseText } from 'utils/Functions';
import './styles.css';

function AppointmentCard({
  imageUrl,
  imageDescription,
  label
}: IAppointmentCard) {
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