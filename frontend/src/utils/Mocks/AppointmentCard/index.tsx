import { IAppointmentCard } from 'utils/Types';
import CustoReduzidoLogo from 'assets/img/consultas/custoReduzido.png';
import ConsultaParticularLogo from 'assets/img/consultas/consultaParticular.png';
import HospitalEscolaLogo from 'assets/img/consultas/hospitalEscola.png';
import ProfissionaisEspecializadosLogo from 'assets/img/consultas/profissionaisEspecializados.png';

export const Appointments: IAppointmentCard[] = [
  {
    content: {
      url: `${CustoReduzidoLogo}`,
      description: 'Custo Reduzido logo',
    },
    label: 'Custo Reduzido'
  },
  {
    content: {
      url: `${ConsultaParticularLogo}`,
      description: 'Consulta Particular logo',
    },
    label: 'Consulta Particular'
  },
  {
    content: {
      url: `${HospitalEscolaLogo}`,
      description: 'Hospital Escola logo',
    },
    label: 'Hospital Escola'
  },
  {
    content: {
      url: `${ProfissionaisEspecializadosLogo}`,
      description: 'Profissionais Especializados logo',
    },
    label: 'Profissionais Especializados'
  }
];