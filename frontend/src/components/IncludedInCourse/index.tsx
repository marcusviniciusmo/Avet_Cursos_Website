import { Included } from 'utils/Mocks/IncludedInCourse';
import { ToUpperCaseText } from 'utils/Functions';
import './styles.css';

function IncludedInCourse() {
  return (
    <>
      {
        Included.map((included) => {
          return (
            <div id='includedInCourseContainer'>
              <div id='includedInCourseLogoContainer'>
                <img
                  src={included.content.url}
                  alt={included.content.description}
                />
              </div>
              <span>{ToUpperCaseText(included.label)}</span>
            </div>
          )
        })
      }
    </>
  );
};

export default IncludedInCourse;