import { IArticle } from 'utils/Types';
import FotoMateria2022 from 'assets/img/blog/fotoMateria2022.png';
import FotoMateria2021 from 'assets/img/blog/fotoMateria2021.png';
import FotoMateria2020 from 'assets/img/blog/fotoMateria2020.png';
import FotoMateria2019 from 'assets/img/blog/fotoMateria2019.png';
import FotoMateria2018 from 'assets/img/blog/fotoMateria2018.png';

export const Articles: IArticle[] = [
  {
    id: 1,
    content: {
      imageUrl: FotoMateria2018,
      imageDescription: "Avet Cursos - logo do artigo",
      articleTitle: "Sucesso na Carreira: 5 dicas para auxiliar veterinários em 2018",
      articleText: `Lorem ipsum varius neque et nibh euismod amet lorem phasellus
        aliquam, conubia rutrum mauris eu pretium vulputate cras molestie.
        adipiscing non velit sapien rhoncus class nam vehicula taciti curae
        lacinia duis eu id, curabitur potenti molestie sagittis volutpat tempus
        feugiat nullam imperdiet molestie taciti duis.`
    }
  },
  {
    id: 2,
    content: {
      imageUrl: FotoMateria2019,
      imageDescription: "Avet Cursos - logo do artigo",
      articleTitle: "Sucesso na Carreira: 5 dicas para auxiliar veterinários em 2019",
      articleText: `Lorem ipsum varius neque et nibh euismod amet lorem phasellus
        aliquam, conubia rutrum mauris eu pretium vulputate cras molestie.
        adipiscing non velit sapien rhoncus class nam vehicula taciti curae
        lacinia duis eu id, curabitur potenti molestie sagittis volutpat tempus
        feugiat nullam imperdiet molestie taciti duis.`
    }
  },
  {
    id: 3,
    content: {
      imageUrl: FotoMateria2020,
      imageDescription: "Avet Cursos - logo do artigo",
      articleTitle: "Sucesso na Carreira: 5 dicas para auxiliar veterinários em 2020",
      articleText: `Lorem ipsum varius neque et nibh euismod amet lorem phasellus
        aliquam, conubia rutrum mauris eu pretium vulputate cras molestie.
        adipiscing non velit sapien rhoncus class nam vehicula taciti curae
        lacinia duis eu id, curabitur potenti molestie sagittis volutpat tempus
        feugiat nullam imperdiet molestie taciti duis.`
    }
  },
  {
    id: 4,
    content: {
      imageUrl: FotoMateria2021,
      imageDescription: "Avet Cursos - logo do artigo",
      articleTitle: "Sucesso na Carreira: 5 dicas para auxiliar veterinários em 2021",
      articleText: `Lorem ipsum varius neque et nibh euismod amet lorem phasellus
        aliquam, conubia rutrum mauris eu pretium vulputate cras molestie.
        adipiscing non velit sapien rhoncus class nam vehicula taciti curae
        lacinia duis eu id, curabitur potenti molestie sagittis volutpat tempus
        feugiat nullam imperdiet molestie taciti duis.`
    }
  },
  {
    id: 5,
    content: {
      imageUrl: FotoMateria2022,
      imageDescription: "Avet Cursos - logo do artigo",
      articleTitle: "Sucesso na Carreira: 5 dicas para auxiliar veterinários em 2022",
      articleText: `Lorem ipsum varius neque et nibh euismod amet lorem phasellus
        aliquam, conubia rutrum mauris eu pretium vulputate cras molestie.
        adipiscing non velit sapien rhoncus class nam vehicula taciti curae
        lacinia duis eu id, curabitur potenti molestie sagittis volutpat tempus
        feugiat nullam imperdiet molestie taciti duis.`
    }
  }
];

export const NumberArticlesDisplayed = 4;

export const LabelButtonLessContent = 'Veja menos Matérias';

export const LabelButtonMoreContent = 'Veja mais Matérias';