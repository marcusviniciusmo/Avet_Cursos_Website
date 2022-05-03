import { Button } from "react-bootstrap";
import { ToUpperCaseText } from "utils/Functions";
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
          id="serviceListingExames"
          serviceList="Hemograma,Raio-X,Exame Loren Ipsum,
            Exame Loren Ipsum,Exame Loren Ipsum"
        />

        <ServiceListing
          id="serviceListingCirurgias"
          serviceList="Castração,Cirurgia Loren Ipsum,Cirurgia Loren Ipsum,
            Cirurgia Loren Ipsum,Cirurgia Loren Ipsum"
        />
      </div>

      <Button
        id="btnAgendeUmaConsulta"
        href="/agendarConsultaOnline"
      >
        {ToUpperCaseText('Agende já uma consulta')}
      </Button>

      <Footer />
    </section>
  );
};

export default Consultas;