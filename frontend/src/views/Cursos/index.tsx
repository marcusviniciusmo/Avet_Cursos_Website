import { ToUpperCaseText } from "utils/Functions";
import { Button } from "react-bootstrap";
import Header from "components/Header";
import CourseCard from "components/CourseCard";
import LogoAuxVeterinario from 'assets/img/cursos/auxiliarVet.png';
import LogoAuxSilvestres from 'assets/img/cursos/auxSilvestre.png';
import LogoAuxInstrument from 'assets/img/cursos/auxInstrument.png';
import IncludedInCourse from "components/IncludedInCourse";
import ApostilaLogo from 'assets/img/cursos/apostilaLogo.png';
import CertificadoLogo from 'assets/img/cursos/certificadoLogo.png';
import EstetoscopioLogo from 'assets/img/cursos/estetoscopioLogo.png';
import Footer from "components/Footer";
import './styles.css';

function Cursos() {
  const courses = [{
    imageUrl: `${LogoAuxVeterinario}`,
    imageDescription: 'Curso Auxiliar Veterinário logo',
    courseTitle: 'Auxiliar Veterinário',
    durationInfoHeader: 'Completo,Módulo I,Módulo II',
    durationInfoBody: '1 Ano,6 Meses,6 Meses',
    periodInfoHeader: 'Manhã,Tarde,Noite',
    periodInfoBody: '08h às 12h,13:30 às 17:30,18:30 às 22:30',
    borderRight: true
  }, {
    imageUrl: `${LogoAuxSilvestres}`,
    imageDescription: 'Curso Auxiliar em Silvestres e Exóticos logo',
    courseTitle: 'Auxiliar em Silvestres e Exóticos',
    durationInfoBody: 'Duração de 6 Meses',
    periodInfoHeader: 'Manhã,Tarde,Noite',
    periodInfoBody: '08h às 12h,13:30 às 17:30,18:30 às 22:30',
    borderRight: true
  }, {
    imageUrl: `${LogoAuxInstrument}`,
    imageDescription: 'Curso Aux. Instrument. e Proced. Cirúrgicos logo',
    courseTitle: 'Auxiliar em Instrumentação e Procedimentos Cirúrgicos',
    durationInfoBody: 'Duração de 6 Meses',
    periodInfoHeader: 'Manhã,Tarde,Noite',
    periodInfoBody: '08h às 12h,13:30 às 17:30,18:30 às 22:30'
  }]

  return (
    <section>
      <Header />
      <div id="cursosContainer">
        <div id="courseCards">
          {
            courses.map((course) => {
              return (
                <CourseCard
                  imageUrl={course.imageUrl}
                  imageDescription={course.imageDescription}
                  courseTitle={course.courseTitle}
                  durationInfoHeader={course.durationInfoHeader}
                  durationInfoBody={course.durationInfoBody}
                  periodInfoHeader={course.periodInfoHeader}
                  periodInfoBody={course.periodInfoBody}
                  borderRight={course.borderRight}
                />
              )
            })
          }
        </div>

        <div id="includedCourseCardsContainer">
          <span id="includedInCourseLabel">
            {ToUpperCaseText('Incluso em todos os cursos')}
          </span>
          <IncludedInCourse
            imageUrl={ApostilaLogo}
            imageDescription="Avet Curso - Apostila logo"
            label="Apostila"
          />

          <IncludedInCourse
            imageUrl={CertificadoLogo}
            imageDescription="Avet Curso - Certificado logo"
            label="Certificado"
          />

          <IncludedInCourse
            imageUrl={EstetoscopioLogo}
            imageDescription="Avet Curso - Estetoscópio logo"
            label="Jaleco e Estetoscópio"
          />
        </div>

        <span id="courseNotifications">
          * Uma aula na semana, contendo a parte teórica e prática. ** Aprendizado
          na prática com atendimentos reais.
        </span>

        <Button variant="light" id="btnMatriculeSeJa" >
          {ToUpperCaseText('Matricule-se Já')}
        </Button>
        <Footer />
      </div>
    </section>
  );
};

export default Cursos;