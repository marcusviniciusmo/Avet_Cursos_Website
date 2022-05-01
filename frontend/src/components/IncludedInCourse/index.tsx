import { IIncludedInCourse } from 'utils/Types';
import { ToUpperCaseText } from 'utils/Functions';
import './styles.css';

function IncludedInCourse({
  imageUrl,
  imageDescription,
  label
}: IIncludedInCourse) {
  return (
    <div id='includedInCourseContainer'>
      <div id='includedInCourseLogoContainer'>
        <img src={imageUrl} alt={imageDescription} />
      </div>
      <span>{ToUpperCaseText(label)}</span>
    </div>
  );
};

export default IncludedInCourse;