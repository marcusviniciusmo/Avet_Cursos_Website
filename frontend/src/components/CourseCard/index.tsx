import { Courses } from 'utils/Mocks/CourseCard';
import { ToUpperCaseText } from 'utils/Functions';
import CourseDuration from 'components/CourseDuration';
import CoursePeriod from 'components/CoursePeriod';
import './styles.css';

function CourseCard() {
  return (
    <>
      {
        Courses.map((course) => {
          return (
            <div
              id='courseCardContainer'
              style={{
                borderRight: course.borderRight ? '2px solid #D4E4DC' : 'none'
              }}
            >
              <div id="courseCardLogoContainer">
                <img src={course.imageUrl} alt={course.imageDescription} />
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
          )
        })
      }
    </>
  );
};

export default CourseCard;