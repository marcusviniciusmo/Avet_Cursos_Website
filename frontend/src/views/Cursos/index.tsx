import { ToUpperCaseText } from "utils/Functions";
import { Button } from "react-bootstrap";
import Header from "components/Header";
import CourseCard from "components/CourseCard";
import IncludedInCourse from "components/IncludedInCourse";
import Footer from "components/Footer";
import './styles.css';

function Cursos() {
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
          
          <IncludedInCourse />
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