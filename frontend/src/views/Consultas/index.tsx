import { AppointmentButton, LabelButtonAppointment } from 'utils/Mocks/Consultas';
import { Button } from "react-bootstrap";
import { ToUpperCaseText } from "utils/Functions";
import { Services } from 'utils/Mocks/ServiceListing';
import Header from "components/Header";
import AppointmentCard from "components/AppointmentCard";
import ServiceListing from "components/ServiceListing";
import Footer from "components/Footer";
import './styles.css';

function Consultas() {
  return (
    <section>
      <Header />

      <div id="appointmentCardsContainer">
        <AppointmentCard />
      </div>

      <div id="serviceListingsContainer">
        <ServiceListing
          id={Services[0].id}
          serviceList={Services[0].serviceList}
        />

        <ServiceListing
          id={Services[1].id}
          serviceList={Services[1].serviceList}
        />
      </div>

      <Button
        id={AppointmentButton.id}
        href={AppointmentButton.href}
      >
        {ToUpperCaseText(LabelButtonAppointment)}
      </Button>

      <Footer />
    </section>
  );
};

export default Consultas;