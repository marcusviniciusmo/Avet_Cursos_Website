import Header from "components/Header";
import AppointmentCard from "components/AppointmentCard/indes";
import CustoReduzidoLogo from 'assets/img/consultas/custoReduzido.png';
import ConsultaParticularLogo from 'assets/img/consultas/consultaParticular.png';
import HospitalEscolaLogo from 'assets/img/consultas/hospitalEscola.png';
import ProfissionaisEspecializadosLogo from 'assets/img/consultas/profissionaisEspecializados.png';
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
    <>
      <h1>VIEW</h1>
      <h1>Avet - Página Consultas</h1>

      <Header />

      <h1>BODY</h1>
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

      <h5>Hemograma</h5>
      <h5>Raio-X</h5>
      <h5>Exame Loren Ipsum</h5>
      <h5>Exame Loren Ipsum</h5>
      <h5>Exame Loren Ipsum</h5>

      <h5>Castração</h5>
      <h5>Cirurgia Loren Ipsum</h5>
      <h5>Cirurgia Loren Ipsum</h5>
      <h5>Cirurgia Loren Ipsum</h5>
      <h5>Cirurgia Loren Ipsum</h5>

      <h3>AQUI VAI UM BOTÃO</h3>
      <h4>Agende já uma consulta</h4>

      <Footer />
    </>
  );
};

export default Consultas;