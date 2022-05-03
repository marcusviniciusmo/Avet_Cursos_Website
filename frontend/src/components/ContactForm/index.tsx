import { useState } from "react";
import { ToUpperCaseText } from "utils/Functions";
import { Fields, SuccessNotification } from 'utils/Mocks/ContactForm';
import { Toast } from "components/Toast";
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

  const submitForm = (event: any) => {
    event.preventDefault();

    if (name.length > 0 &&
      phone.length > 0 &&
      email.length > 0 &&
      cellPhone.length > 0 &&
      message.length > 0) {
      Toast.fire({
        icon: SuccessNotification.icon,
        title: SuccessNotification.message
      });
    }
  };

  return (
    <div id="contactFormContainer">
      <div id="contactFormBorder" />

      <form action="">
        <div className="contactFormRow">
          <div className="contactFormField">
            <input
              type={Fields.content[0].type}
              name={Fields.content[0].name}
              id={Fields.content[0].id}
              maxLength={Fields.content[0].maxLength}
              placeholder={Fields.content[0].placeholder}
              onChange={handleName}
              value={name}
            />
          </div>

          <div className="contactFormField">
            <input
              type={Fields.content[1].type}
              name={Fields.content[1].name}
              id={Fields.content[1].id}
              maxLength={Fields.content[1].maxLength}
              placeholder={Fields.content[1].placeholder}
              onChange={handlePhone}
              value={phone}
            />
          </div>
        </div>

        <div className="contactFormRow">
          <div className="contactFormField">
            <input
              type={Fields.content[2].type}
              name={Fields.content[2].name}
              id={Fields.content[2].id}
              maxLength={Fields.content[2].maxLength}
              placeholder={Fields.content[2].placeholder}
              onChange={handleEmail}
              value={email}
            />
          </div>

          <div className="contactFormField">
            <input
              type={Fields.content[3].type}
              name={Fields.content[3].name}
              id={Fields.content[3].id}
              maxLength={Fields.content[3].maxLength}
              placeholder={Fields.content[3].placeholder}
              onChange={handleCellPhone}
              value={cellPhone}
            />
          </div>
        </div>

        <div className="contactFormRow">
          <div className="contactFormField">
            <textarea
              name={Fields.content[4].name}
              id={Fields.content[4].id}
              cols={Fields.content[4].cols}
              rows={Fields.content[4].rows}
              maxLength={Fields.content[4].maxLength}
              placeholder={Fields.content[4].placeholder}
              onChange={handleMessage}
              value={message}
            />
          </div>
        </div>

        <div id="contactFormBtnEnviar">
          <button
            type="submit"
            disabled={isNullForm()}
            onClick={submitForm}
          >
            {ToUpperCaseText(Fields.submitButton.label)}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;