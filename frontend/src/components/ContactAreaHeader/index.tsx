import './styles.css';

type Props = {
  areaTitle: string,
  areaText: string
};

function ContactAreaHeader({ areaTitle, areaText }: Props) {
  return (
    <div id="contactAreaHeaderContainer">
      <div id='contactAreaHeaderTitle'>
        <span>{areaTitle}</span>
      </div>
      <span>{areaText}</span>
    </div>
  );
};

export default ContactAreaHeader;