import { IUnderConstruction } from 'utils/Types';
import { ToUpperCaseText } from "utils/Functions";
import { Message } from 'utils/Mocks/UnderConstruction';
import './styles.css';

function UnderConstruction({ pageTitle }: IUnderConstruction) {
  return (
    <div id="underConstructionContainer">
      <div id="underConstructionLoader" />
      <span>
        {ToUpperCaseText(Message(pageTitle))}
      </span>
    </div>
  );
};

export default UnderConstruction;