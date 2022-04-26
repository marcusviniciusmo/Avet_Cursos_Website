import { ToUpperCaseText } from "utils/Functions";
import './styles.css';

function ContactForm() {
  return (
    <div id="contactFormContainer">
      <div id="contactFormBorder" />

      <form action="">
        <div className="contactFormRow">
          <div className="contactFormField">
            <input
              type="text"
              name="nameField"
              id="nameField"
              maxLength={50}
              placeholder="Nome"
            />
          </div>

          <div className="contactFormField">
            <input
              type="tel"
              name="phoneField"
              id="phoneField"
              maxLength={20}
              placeholder="Telefone"
            />
          </div>
        </div>

        <div className="contactFormRow">
          <div className="contactFormField">
            <input
              type="email"
              name="emailField"
              id="emailField"
              maxLength={50}
              placeholder="E-mail"
            />
          </div>

          <div className="contactFormField">
            <input
              type="tel"
              name="cellPhoneField"
              id="cellPhoneField"
              maxLength={20}
              placeholder="Celular"
            />
          </div>
        </div>

        <div className="contactFormRow">
          <div className="contactFormField">
            <textarea
              name="messageField"
              id="messageField"
              cols={30}
              rows={5}
              maxLength={1000}
              placeholder="Mensagem"
            />
          </div>
        </div>

        <div id="contactFormBtnEnviar">
          <button
            type="submit">
            {ToUpperCaseText('Enviar')}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;