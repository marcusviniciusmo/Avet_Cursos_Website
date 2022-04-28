import { ToUpperCaseText } from "utils/Functions";

type Props = {
  pageTitle: string
};

function UnderConstruction({ pageTitle }: Props) {
  return (
    <>
        <span>
          {ToUpperCaseText(`A página ${pageTitle} está em construção`)}
        </span>
    </>
  );
};

export default UnderConstruction;