import { useState } from "react";
import { ToUpperCaseText } from "utils/Functions";
import './styles.css';

function ContactForm() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [cellPhone, setCellPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleName = (event: any) => {
    setName(event.target.value);
  };

  const handlePhone = (event: any) => {
    setPhone(event.target.value);
  };

  const handleEmail = (event: any) => {
    setEmail(event.target.value);
  };

  const handleCellPhone = (event: any) => {
    setCellPhone(event.target.value);
  };

  const handleMessage = (event: any) => {
    setMessage(event.target.value);
  };

  const isNullForm = () => {
    if (name && phone && email && cellPhone && message)
      return false;
    else
      return true;
  };

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
              onChange={handleName}
              value={name}
            />
          </div>

          <div className="contactFormField">
            <input
              type="tel"
              name="phoneField"
              id="phoneField"
              maxLength={20}
              placeholder="Telefone"
              onChange={handlePhone}
              value={phone}
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
              onChange={handleEmail}
              value={email}
            />
          </div>

          <div className="contactFormField">
            <input
              type="tel"
              name="cellPhoneField"
              id="cellPhoneField"
              maxLength={20}
              placeholder="Celular"
              onChange={handleCellPhone}
              value={cellPhone}
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
              onChange={handleMessage}
              value={message}
            />
          </div>
        </div>

        <div id="contactFormBtnEnviar">
          <button
            type="submit"
            disabled={isNullForm()}
          >
            {ToUpperCaseText('Enviar')}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;