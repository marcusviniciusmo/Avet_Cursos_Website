import { IMenuItem } from 'utils/Types';
import { ToUpperCaseText } from "utils/Functions";
import './styles.css';

function MenuItem({ textButton, id }: IMenuItem) {
  return (
    <li id={id}>
      {ToUpperCaseText(textButton)}
    </li>
  );
};

export default MenuItem;