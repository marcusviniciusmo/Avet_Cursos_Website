import { IAppointmentCard } from 'utils/Types';
import CustoReduzidoLogo from 'assets/img/consultas/custoReduzido.png';
import ConsultaParticularLogo from 'assets/img/consultas/consultaParticular.png';
import HospitalEscolaLogo from 'assets/img/consultas/hospitalEscola.png';
import ProfissionaisEspecializadosLogo from 'assets/img/consultas/profissionaisEspecializados.png';

export const Appointments: IAppointmentCard[] = [
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
  }
];