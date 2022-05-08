import { ContactAreaHeaders } from 'utils/Mocks/ContactAreaHeader';
import { LogoAvet } from 'utils/Mocks/FaleConosco';
import Header from "components/Header";
import ContactAreaHeader from "components/ContactAreaHeader";
import ContactForm from "components/ContactForm";
import AvetMap from "components/AvetMap";
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
        <img
          src={LogoAvet.imageUrl}
          alt={LogoAvet.imageDescription}
        />

        <ContactInfo />

        <ContactInfoButtonArea />
      </div>

      <Footer />
    </section>
  );
};

export default FaleConosco;