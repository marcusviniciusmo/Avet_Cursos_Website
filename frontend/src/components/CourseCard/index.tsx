import CourseDuration from 'components/CourseDuration';
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

      <h4>Período</h4>
      <h5>{periodInfoHeader}</h5>
      <h6>{periodInfoBody}</h6>
      <h4>Grade Currícular</h4>
    </>
  );
};

export default CourseCard;