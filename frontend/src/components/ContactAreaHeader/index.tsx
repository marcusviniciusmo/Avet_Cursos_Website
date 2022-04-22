type Props = {
  areaTitle: string,
  areaText: string
};

function ContactAreaHeader({ areaTitle, areaText }: Props) {
  return (
    <>
      <h1>{areaTitle}</h1>
      <h4>{areaText}</h4>
    </>
  );
};

export default ContactAreaHeader;