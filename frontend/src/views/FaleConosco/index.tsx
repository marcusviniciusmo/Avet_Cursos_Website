import Header from "components/Header";
import ContactAreaHeader from "components/ContactAreaHeader";
import ContactForm from "components/ContactForm";
import AvetMap from "components/AvetMap";
import AvetLogo from 'assets/img/faleConosco/avetLogo.png';
import Footer from "components/Footer";
import './styles.css';

function FaleConosco() {
  return (
    <>
      <h1>VIEW</h1>
      <h1>Avet - Página Fale Conosco</h1>

      <Header />

      <h1>BODY</h1>
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

        <h3>AQUI VAI UM ÍCONE</h3>
        <h5>(19) 3254-4083 // 99900-4489 (Whats)</h5>
        <h3>AQUI VAI UM ÍCONE</h3>
        <h5>contato@avetcursos.com.br</h5>
        <h3>AQUI VAI UM ÍCONE</h3>
        <h5>Av. Vital Brasil, 302 Jd. Bela Vista - 13076-415 - Campinas/SP</h5>

        <h3>AQUI VAI UM BOTÃO</h3>
        <h5>Whatsapp</h5>
        <h3>AQUI VAI UM ÍCONE</h3>

        <h3>AQUI VAI UM BOTÃO</h3>
        <h5>Mensagem</h5>
        <h3>AQUI VAI UM ÍCONE</h3>
      </div>

      <Footer />
    </>
  );
};

export default FaleConosco;