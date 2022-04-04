import { ToUpperCaseText } from 'utils/Functions';
import './styles.css';

type Props = {
  imageUrl: string,
  imageDescription: string,
  label: string
};

function IncludedInCourse({ imageUrl, imageDescription, label }: Props) {
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