import { Courses } from 'utils/Mocks/CourseCard';
import { ToUpperCaseText } from 'utils/Functions';
import CourseDuration from 'components/CourseDuration';
import CoursePeriod from 'components/CoursePeriod';
import Border from 'components/Border';
import './styles.css';

function CourseCard() {
  return (
    <>
      {
        Courses.map((course) => {
          return (
            <>
              <div id='courseCardContainer' >
                <div id="courseCardLogoContainer">
                  <img src={course.content.url} alt={course.content.description} />
                </div>
                <span id='courseCardTitle'>
                  {ToUpperCaseText(course.courseTitle)}
                </span>

                <CourseDuration
                  infoHeader={course.durationInfoHeader}
                  infoBody={course.durationInfoBody}
                />

                <CoursePeriod
                  infoHeader={course.periodInfoHeader}
                  infoBody={course.periodInfoBody}
                />

              </div>
              {
                course.borderRight &&
                <Border />
              }
            </>
          )
        })
      }
    </>
  );
};

export default CourseCard;