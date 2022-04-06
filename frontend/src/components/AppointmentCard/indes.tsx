type Props = {
  imageUrl: string,
  imageDescription: string,
  label: string
};

function AppointmentCard({ imageUrl, imageDescription, label }: Props) {
  return (
    <>
      <img src={imageUrl} alt={imageDescription} />
      <span>{label}</span>
    </>
  );
};

export default AppointmentCard;