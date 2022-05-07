import { PageTitle } from 'utils/Mocks/AgendarConsultaOnline';
import Header from "components/Header";
import UnderConstruction from "components/UnderConstruction";
import Footer from "components/Footer";

function AgendarConsultaOnline() {
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

export default AgendarConsultaOnline;