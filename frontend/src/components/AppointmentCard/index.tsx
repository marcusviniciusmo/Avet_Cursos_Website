import { Appointments } from 'utils/Mocks/AppointmentCard';
import { ToUpperCaseText } from 'utils/Functions';
import './styles.css';

function AppointmentCard() {
  return (
    <>
      {
        Appointments.map((appointment) => {
          return (
            <div id='appointmentCardContainer'>
              <div id="appointmentCardLogoContainer">
                <img
                  src={appointment.imageUrl}
                  alt={appointment.imageDescription}
                />
              </div>

              <span>{ToUpperCaseText(appointment.label)}</span>
            </div>
          )
        })
      }
    </>
  );
};

export default AppointmentCard;