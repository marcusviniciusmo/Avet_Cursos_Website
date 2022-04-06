import Header from "components/Header";
import AppointmentCard from "components/AppointmentCard/indes";
import CustoReduzidoLogo from 'assets/img/consultas/custoReduzido.png';
import ConsultaParticularLogo from 'assets/img/consultas/consultaParticular.png';
import HospitalEscolaLogo from 'assets/img/consultas/hospitalEscola.png';
import ProfissionaisEspecializadosLogo from 'assets/img/consultas/profissionaisEspecializados.png';
import Footer from "components/Footer";

function Consultas() {
  return (
    <>
      <h1>VIEW</h1>
      <h1>Avet - Página Consultas</h1>

      <Header />

      <h1>BODY</h1>
      <AppointmentCard
        imageUrl={CustoReduzidoLogo}
        imageDescription="Custo Reduzido logo"
        label="Custo Reduzido"
      />
      <AppointmentCard
        imageUrl={ConsultaParticularLogo}
        imageDescription="Consulta Particular logo"
        label="Consulta Particular"
      />

      <AppointmentCard
        imageUrl={HospitalEscolaLogo}
        imageDescription="Hospital Escola logo"
        label="Hospital Escola"
      />

      <AppointmentCard
        imageUrl={ProfissionaisEspecializadosLogo}
        imageDescription="Profissionais Especializados logo"
        label="Profissionais Especializados"
      />

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