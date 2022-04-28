import { ToUpperCaseText } from "utils/Functions";
import './styles.css';

type Props = {
  pageTitle: string
};

function UnderConstruction({ pageTitle }: Props) {
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