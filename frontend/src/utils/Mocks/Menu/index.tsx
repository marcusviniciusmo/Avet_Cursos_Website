import { IMenu } from 'utils/Types';

export const Menu: IMenu[] = [
  {
    to: '/',
    className: 'btnDecorationNone',
    content: {
      textButton: 'Home',
      id: 'btnHome'
    }
  },
  {
    to: '/cursos',
    className: 'btnDecorationNone',
    content: {
      textButton: 'Cursos',
      id: 'btnCursos'
    }
  },
  {
    to: '/consultas',
    className: 'btnDecorationNone',
    content: {
      textButton: 'Consultas',
      id: 'btnConsultas'
    }
  },
  {
    to: '/aavet',
    className: 'btnDecorationNone',
    content: {
      textButton: 'A Avet',
      id: 'btnAAvet'
    }
  },
  {
    to: '/blog',
    className: 'btnDecorationNone',
    content: {
      textButton: 'Blog',
      id: 'btnBlog'
    }
  },
  {
    to: '/faleConosco',
    className: 'btnDecorationNone',
    content: {
      textButton: 'Fale Conosco',
      id: 'btnFaleConosco'
    }
  },
  {
    to: '/inscricaoOnline',
    className: 'btnDecorationNone',
    content: {
      textButton: 'Inscrição Online',
      id: 'btnInscricaoOnline'
    }
  },
  {
    to: '/agendarConsultaOnline',
    className: 'btnDecorationNone',
    content: {
      textButton: 'Agendar Consulta Online',
      id: 'btnAgendarConsultaOnline'
    }
  }
];