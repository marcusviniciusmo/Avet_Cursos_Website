import { IUnderConstruction } from 'utils/Types';
import { ToUpperCaseText } from "utils/Functions";
import './styles.css';

function UnderConstruction({ pageTitle }: IUnderConstruction) {
  return (
    <div id="underConstructionContainer">
      <div id="underConstructionLoader" />
      <span>
        {ToUpperCaseText(`A página ${pageTitle} está em construção`)}
      </span>
    </div>
  );
};

export default UnderConstruction;