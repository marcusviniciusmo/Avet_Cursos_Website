import { Button } from "react-bootstrap";
import { ToUpperCaseText } from "utils/Functions";
import Header from "components/Header";
import AppointmentCard from "components/AppointmentCard/indes";
import CustoReduzidoLogo from 'assets/img/consultas/custoReduzido.png';
import ConsultaParticularLogo from 'assets/img/consultas/consultaParticular.png';
import HospitalEscolaLogo from 'assets/img/consultas/hospitalEscola.png';
import ProfissionaisEspecializadosLogo from 'assets/img/consultas/profissionaisEspecializados.png';
import ServiceListing from "components/ServiceListing";
import Footer from "components/Footer";
import './styles.css';

function Consultas() {
  const appointments = [
    {
      imageUrl: `${CustoReduzidoLogo}`,
      imageDescription: 'Custo Reduzido logo',
      label: 'Custo Reduzido'
    },
    {
      imageUrl: `${ConsultaParticularLogo}`,
      imageDescription: 'Consulta Particular logo',
      label: 'Consulta Particular'
    },
    {
      imageUrl: `${HospitalEscolaLogo}`,
      imageDescription: 'Hospital Escola logo',
      label: 'Hospital Escola'
    },
    {
      imageUrl: `${ProfissionaisEspecializadosLogo}`,
      imageDescription: 'Profissionais Especializados logo',
      label: 'Profissionais Especializados'
    }];

  return (
    <section>
      <Header />

      <div id="appointmentCardsContainer">
        {
          appointments.map((appointment) => {
            return (
              <AppointmentCard
                imageUrl={appointment.imageUrl}
                imageDescription={appointment.imageDescription}
                label={appointment.label}
              />
            )
          })
        }
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

      <Button id="btnAgendeUmaConsulta">
        {ToUpperCaseText('Agende já uma consulta')}
      </Button>

      <Footer />
    </section>
  );
};

export default Consultas;