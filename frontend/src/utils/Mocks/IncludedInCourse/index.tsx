import { IIncludedInCourse } from 'utils/Types';
import ApostilaLogo from 'assets/img/cursos/apostilaLogo.png';
import CertificadoLogo from 'assets/img/cursos/certificadoLogo.png';
import EstetoscopioLogo from 'assets/img/cursos/estetoscopioLogo.png';

export const Included: IIncludedInCourse[] = [
  {
    imageUrl: ApostilaLogo,
    imageDescription: 'Avet Curso - Apostila logo',
    label: 'Apostila'
  },
  {
    imageUrl: CertificadoLogo,
    imageDescription: 'Avet Curso - Certificado logo',
    label: 'Certificado'
  },
  {
    imageUrl: EstetoscopioLogo,
    imageDescription: 'Avet Curso - Estetoscopio logo',
    label: 'Jaleco e Estetoscopio'
  },
];