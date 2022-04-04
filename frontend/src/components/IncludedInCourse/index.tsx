type Props = {
  imageUrl: string,
  imageDescription: string,
  label: string
};

function IncludedInCourse({ imageUrl, imageDescription, label }: Props) {
  return (
    <>
      <img src={imageUrl} alt={imageDescription} />
      <span>{label}</span>
    </>
  );
};

export default IncludedInCourse;