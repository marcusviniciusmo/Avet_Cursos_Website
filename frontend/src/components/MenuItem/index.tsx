import { ToUpperCaseText } from "utils/Functions";
import './styles.css';

type Props = {
  textButton: string,
  id: string
};

function MenuItem({ textButton, id }: Props) {
  return (
    <li id={id}>
      {ToUpperCaseText(textButton)}
    </li>
  );
};

export default MenuItem;