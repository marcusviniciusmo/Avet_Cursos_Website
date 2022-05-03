import { IContactFormNotification, IContactForm } from 'utils/Types';

export const SuccessNotification: IContactFormNotification = {
  icon: 'success',
  message: 'Sua mensagem foi enviada.'
};

export const Fields: IContactForm = {
  content: [
    {
      type: 'text',
      name: 'nameField',
      id: 'nameField',
      maxLength: 50,
      placeholder: 'Nome'
    },
    {
      type: 'tel',
      name: 'phoneField',
      id: 'phoneField',
      maxLength: 20,
      placeholder: 'Telefone'
    },
    {
      type: 'email',
      name: 'emailField',
      id: 'emailField',
      maxLength: 50,
      placeholder: 'E-mail'
    },
    {
      type: 'tel',
      name: 'cellPhoneField',
      id: 'cellPhoneField',
      maxLength: 20,
      placeholder: 'Celular'
    },
    {
      name: 'messageField',
      id: 'messageField',
      maxLength: 1000,
      placeholder: 'Mensagem',
      cols: 30,
      rows: 5
    },
  ],
  submitButton: {
    label: 'Enviar'
  }
};