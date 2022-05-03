import { ContactAreaHeaders } from 'utils/Mocks/ContactAreaHeader';
import Header from "components/Header";
import ContactAreaHeader from "components/ContactAreaHeader";
import ContactForm from "components/ContactForm";
import AvetMap from "components/AvetMap";
import AvetLogo from 'assets/img/faleConosco/avetLogo.png';
import ContactInfo from "components/ContactInfo";
import ContactInfoButtonArea from "components/ContactInfoButtonArea";
import Footer from "components/Footer";
import './styles.css';

function FaleConosco() {
  return (
    <section>
      <Header />

      <ContactAreaHeader
        areaTitle={ContactAreaHeaders[0].areaTitle}
        areaText={ContactAreaHeaders[0].areaText}
      />

      <ContactForm />

      <div id="faleConoscoAreaBorder" />

      <ContactAreaHeader
        areaTitle={ContactAreaHeaders[1].areaTitle}
        areaText={ContactAreaHeaders[1].areaText}
      />

      <AvetMap />

      <div id="faleConoscoContactArea">
        <img src={AvetLogo} alt="Avet Cursos - logo" />

        <ContactInfo />

        <ContactInfoButtonArea />
      </div>

      <Footer />
    </section>
  );
};

export default FaleConosco;