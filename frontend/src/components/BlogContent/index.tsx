import { useState } from "react";
import { ToUpperCaseText } from "utils/Functions";
import BlogArticle from "components/BlogArticle";
import FotoMateria2022 from 'assets/img/blog/fotoMateria2022.png';
import FotoMateria2021 from 'assets/img/blog/fotoMateria2021.png';
import FotoMateria2020 from 'assets/img/blog/fotoMateria2020.png';
import FotoMateria2019 from 'assets/img/blog/fotoMateria2019.png';
import FotoMateria2018 from 'assets/img/blog/fotoMateria2018.png';
import './styles.css';

function BlogContent() {
  const numberArticlesDisplayed = 4;

  const [showAll, setShowAll] = useState(false);

  const articles = [
    {
      id: 1,
      imageUrl: FotoMateria2018,
      imageDescription: "Avet Cursos - logo do artigo",
      articleTitle: "Sucesso na Carreira: 5 dicas para auxiliar veterinários em 2018",
      articleText: `Lorem ipsum varius neque et nibh euismod amet lorem phasellus
        aliquam, conubia rutrum mauris eu pretium vulputate cras molestie.
        adipiscing non velit sapien rhoncus class nam vehicula taciti curae
        lacinia duis eu id, curabitur potenti molestie sagittis volutpat tempus
        feugiat nullam imperdiet molestie taciti duis.`
    },
    {
      id: 2,
      imageUrl: FotoMateria2019,
      imageDescription: "Avet Cursos - logo do artigo",
      articleTitle: "Sucesso na Carreira: 5 dicas para auxiliar veterinários em 2019",
      articleText: `Lorem ipsum varius neque et nibh euismod amet lorem phasellus
        aliquam, conubia rutrum mauris eu pretium vulputate cras molestie.
        adipiscing non velit sapien rhoncus class nam vehicula taciti curae
        lacinia duis eu id, curabitur potenti molestie sagittis volutpat tempus
        feugiat nullam imperdiet molestie taciti duis.`
    },
    {
      id: 3,
      imageUrl: FotoMateria2020,
      imageDescription: "Avet Cursos - logo do artigo",
      articleTitle: "Sucesso na Carreira: 5 dicas para auxiliar veterinários em 2020",
      articleText: `Lorem ipsum varius neque et nibh euismod amet lorem phasellus
        aliquam, conubia rutrum mauris eu pretium vulputate cras molestie.
        adipiscing non velit sapien rhoncus class nam vehicula taciti curae
        lacinia duis eu id, curabitur potenti molestie sagittis volutpat tempus
        feugiat nullam imperdiet molestie taciti duis.`
    },
    {
      id: 4,
      imageUrl: FotoMateria2021,
      imageDescription: "Avet Cursos - logo do artigo",
      articleTitle: "Sucesso na Carreira: 5 dicas para auxiliar veterinários em 2021",
      articleText: `Lorem ipsum varius neque et nibh euismod amet lorem phasellus
        aliquam, conubia rutrum mauris eu pretium vulputate cras molestie.
        adipiscing non velit sapien rhoncus class nam vehicula taciti curae
        lacinia duis eu id, curabitur potenti molestie sagittis volutpat tempus
        feugiat nullam imperdiet molestie taciti duis.`
    },
    {
      id: 5,
      imageUrl: FotoMateria2022,
      imageDescription: "Avet Cursos - logo do artigo",
      articleTitle: "Sucesso na Carreira: 5 dicas para auxiliar veterinários em 2022",
      articleText: `Lorem ipsum varius neque et nibh euismod amet lorem phasellus
        aliquam, conubia rutrum mauris eu pretium vulputate cras molestie.
        adipiscing non velit sapien rhoncus class nam vehicula taciti curae
        lacinia duis eu id, curabitur potenti molestie sagittis volutpat tempus
        feugiat nullam imperdiet molestie taciti duis.`
    }];

  const handleShowAll = () => {
    setShowAll(!showAll);
  };

  return (
    <div id="blogContentContainer">
      <div id="blogArticlesContainer">
        {
          showAll
            ? articles.reverse().map((article) => {
              return (
                <BlogArticle
                  imageUrl={article.imageUrl}
                  imageDescription={article.imageDescription}
                  articleTitle={article.articleTitle}
                  articleText={article.articleText}
                />
              )
            })
            : articles.reverse()
              .filter(article => article.id > (
                articles.length - numberArticlesDisplayed))
              .map((article) => {
                return (
                  <BlogArticle
                    imageUrl={article.imageUrl}
                    imageDescription={article.imageDescription}
                    articleTitle={article.articleTitle}
                    articleText={article.articleText}
                  />
                )
              })
        }
      </div>

      <div id="btnVejaMaisMaterias" onClick={handleShowAll}>
        {
          showAll
            ? <span>{ToUpperCaseText('Veja menos Matérias')}</span>
            : <span>{ToUpperCaseText('Veja mais Matérias')}</span>
        }
      </div>
    </div>
  );
};

export default BlogContent;