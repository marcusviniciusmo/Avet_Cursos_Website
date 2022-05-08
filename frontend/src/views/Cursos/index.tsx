import { ToUpperCaseText } from "utils/Functions";
import {
  LabelIncludedInCourse,
  SpanNotification,
  RegistrationButton
} from 'utils/Mocks/Cursos';
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
            {ToUpperCaseText(LabelIncludedInCourse)}
          </span>

          <IncludedInCourse />
        </div>

        <span id="courseNotifications">
          {SpanNotification}
        </span>

        <Button
          variant="light"
          id={RegistrationButton.id}
          href={RegistrationButton.href}
        >
          {ToUpperCaseText(RegistrationButton.label)}
        </Button>
        <Footer />
      </div>
    </section>
  );
};

export default Cursos;