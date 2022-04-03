import { ToUpperCaseText } from 'utils/Functions';
import CourseDuration from 'components/CourseDuration';
import CoursePeriod from 'components/CoursePeriod';
import './styles.css';

type Props = {
  imageUrl: string,
  imageDescription: string,
  courseTitle: string,
  durationInfoHeader?: string,
  durationInfoBody: string,
  periodInfoHeader: string,
  periodInfoBody: string,
  borderRight?: boolean
};

function CourseCard({
  imageUrl,
  imageDescription,
  courseTitle,
  durationInfoHeader,
  durationInfoBody,
  periodInfoHeader,
  periodInfoBody,
  borderRight
}: Props) {
  return (
    <div
      id='courseCardContainer'
      style={{ borderRight: borderRight ? '2px solid #D4E4DC' : 'none' }}
    >
      <div id="courseCardLogoContainer">
        <img src={imageUrl} alt={imageDescription} />
      </div>
      <span id='courseCardTitle'>
        {ToUpperCaseText(courseTitle)}
      </span>

      <CourseDuration
        infoHeader={durationInfoHeader}
        infoBody={durationInfoBody}
      />

      <CoursePeriod
        infoHeader={periodInfoHeader}
        infoBody={periodInfoBody}
      />
    </div>
  );
};

export default CourseCard;