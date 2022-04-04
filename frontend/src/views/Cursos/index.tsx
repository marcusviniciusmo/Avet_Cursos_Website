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
    <>
      <h1>VIEW</h1>
      <h1>Avet - Página Cursos</h1>

      <Header />

      <h1>BODY</h1>
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

      <h4>Incluso em todos os cursos</h4>

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

      <h6>
        * Uma aula na semana, contendo a parte teórica e prática. ** Aprendizado
        na prática com atendimentos reais.
      </h6>

      <h3>AQUI VAI UM BOTÃO</h3>
      <h4>Matricule-se Já</h4>

      <Footer />
    </>
  );
};

export default Cursos;