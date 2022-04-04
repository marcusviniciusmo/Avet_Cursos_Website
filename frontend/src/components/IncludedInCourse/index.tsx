import './styles.css';

type Props = {
  imageUrl: string,
  imageDescription: string,
  label: string
};

function IncludedInCourse({ imageUrl, imageDescription, label }: Props) {
  return (
    <>
      <div id='includedInCourseLogoContainer'>
        <img src={imageUrl} alt={imageDescription} />
      </div>
      <span>{label}</span>
    </>
  );
};

export default IncludedInCourse;