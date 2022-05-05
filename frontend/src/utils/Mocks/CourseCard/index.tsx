import { ICourseCard } from 'utils/Types';
import LogoAuxVeterinario from 'assets/img/cursos/auxiliarVet.png';
import LogoAuxSilvestres from 'assets/img/cursos/auxSilvestre.png';
import LogoAuxInstrument from 'assets/img/cursos/auxInstrument.png';

export const Courses: ICourseCard[] = [
  {
    imageUrl: LogoAuxVeterinario,
    imageDescription: 'Curso Auxiliar Veterinário logo',
    courseTitle: 'Auxiliar Veterinário',
    durationInfoHeader: 'Completo,Módulo I,Módulo II',
    durationInfoBody: '1 Ano,6 Meses,6 Meses',
    periodInfoHeader: 'Manhã,Tarde,Noite',
    periodInfoBody: '08h às 12h,13:30 às 17:30,18:30 às 22:30',
    borderRight: true
  },
  {
    imageUrl: LogoAuxSilvestres,
    imageDescription: 'Curso Auxiliar em Silvestres e Exóticos logo',
    courseTitle: 'Auxiliar em Silvestres e Exóticos',
    durationInfoBody: 'Duração de 6 Meses',
    periodInfoHeader: 'Manhã,Tarde,Noite',
    periodInfoBody: '08h às 12h,13:30 às 17:30,18:30 às 22:30',
    borderRight: true
  },
  {
    imageUrl: LogoAuxInstrument,
    imageDescription: 'Curso Aux. Instrument. e Proced. Cirúrgicos logo',
    courseTitle: 'Auxiliar em Instrumentação e Procedimentos Cirúrgicos',
    durationInfoBody: 'Duração de 6 Meses',
    periodInfoHeader: 'Manhã,Tarde,Noite',
    periodInfoBody: '08h às 12h,13:30 às 17:30,18:30 às 22:30',
  }
];