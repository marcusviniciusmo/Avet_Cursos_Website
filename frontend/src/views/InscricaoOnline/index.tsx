import { PageTitle } from 'utils/Mocks/InscricaoOnline';
import Header from "components/Header";
import UnderConstruction from "components/UnderConstruction";
import Footer from "components/Footer";

function InscricaoOnline() {
  return (
    <section>
      <Header />

      <UnderConstruction
        pageTitle={PageTitle.pageTitle}
      />

      <Footer />
    </section>
  );
};

export default InscricaoOnline;