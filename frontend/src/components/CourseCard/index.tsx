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
  periodInfoBody: string
};

function CourseCard({
  imageUrl,
  imageDescription,
  courseTitle,
  durationInfoHeader,
  durationInfoBody,
  periodInfoHeader,
  periodInfoBody
}: Props) {
  return (
    <>
      <div id="courseCardLogoContainer">
        <img src={imageUrl} alt={imageDescription} />
      </div>
      <h1>{courseTitle}</h1>

      <CourseDuration
        infoHeader={durationInfoHeader}
        infoBody={durationInfoBody}
      />

      <CoursePeriod
        infoHeader={periodInfoHeader}
        infoBody={periodInfoBody}
      />
    </>
  );
};

export default CourseCard;