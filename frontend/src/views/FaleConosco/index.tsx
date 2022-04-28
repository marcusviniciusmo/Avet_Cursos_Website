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
        areaTitle="Contato"
        areaText={`Entre em contato conosco. Nossa equipe de especialistas está
          sempre pronta para te atender.`}
      />

      <ContactForm />

      <div id="faleConoscoAreaBorder" />

      <ContactAreaHeader
        areaTitle="Localização"
        areaText={`Av. Vital Brasil, 302 Jd. Bela Vista - CEP 13076-415 -
          Campinas - SP`}
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