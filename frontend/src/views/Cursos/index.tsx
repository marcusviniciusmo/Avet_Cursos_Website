import { ToUpperCaseText } from "utils/Functions";
import { Button } from "react-bootstrap";
import Header from "components/Header";
import CourseCard from "components/CourseCard";
import IncludedInCourse from "components/IncludedInCourse";
import ApostilaLogo from 'assets/img/cursos/apostilaLogo.png';
import CertificadoLogo from 'assets/img/cursos/certificadoLogo.png';
import EstetoscopioLogo from 'assets/img/cursos/estetoscopioLogo.png';
import Footer from "components/Footer";
import './styles.css';

function Cursos() {
  const includedInCourse = [{
    imageUrl: `${ApostilaLogo}`,
    imageDescription: 'Avet Curso - Apostila logo',
    label: 'Apostila'
  }, {
    imageUrl: `${CertificadoLogo}`,
    imageDescription: 'Avet Curso - Certificado logo',
    label: 'Certificado'
  }, {
    imageUrl: `${EstetoscopioLogo}`,
    imageDescription: 'Avet Curso - Estetoscopio logo',
    label: 'Jaleco e Estetoscopio'
  }];

  return (
    <section>
      <Header />
      <div id="cursosContainer">
        <div id="courseCards">
          <CourseCard />
        </div>

        <div id="includedCourseCardsContainer">
          <span id="includedInCourseLabel">
            {ToUpperCaseText('Incluso em todos os cursos')}
          </span>
          {
            includedInCourse.map((included) => {
              return (
                <IncludedInCourse
                  imageUrl={included.imageUrl}
                  imageDescription={included.imageDescription}
                  label={included.label}
                />
              )
            })
          }
        </div>

        <span id="courseNotifications">
          * Uma aula na semana, contendo a parte teórica e prática. ** Aprendizado
          na prática com atendimentos reais.
        </span>

        <Button
          variant="light"
          id="btnMatriculeSeJa"
          href="/inscricaoOnline"
        >
          {ToUpperCaseText('Matricule-se Já')}
        </Button>
        <Footer />
      </div>
    </section>
  );
};

export default Cursos;