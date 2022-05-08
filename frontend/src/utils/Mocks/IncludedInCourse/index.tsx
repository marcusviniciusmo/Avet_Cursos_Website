import { IIncludedInCourse } from 'utils/Types';
import ApostilaLogo from 'assets/img/cursos/apostilaLogo.png';
import CertificadoLogo from 'assets/img/cursos/certificadoLogo.png';
import EstetoscopioLogo from 'assets/img/cursos/estetoscopioLogo.png';

export const Included: IIncludedInCourse[] = [
  {
    label: 'Apostila',
    content: {
      url: ApostilaLogo,
      description: 'Avet Curso - Apostila logo'
    }
  },
  {
    label: 'Certificado',
    content: {
      url: CertificadoLogo,
      description: 'Avet Curso - Certificado logo'
    }
  },
  {
    label: 'Jaleco e Estetoscopio',
    content: {
      url: EstetoscopioLogo,
      description: 'Avet Curso - Estetoscopio logo'
    }
  },
];