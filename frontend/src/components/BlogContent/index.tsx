import { ToUpperCaseText } from "utils/Functions";
import BlogArticle from "components/BlogArticle";
import FotoMateria2022 from 'assets/img/blog/fotoMateria2022.png';
import FotoMateria2021 from 'assets/img/blog/fotoMateria2021.png';
import FotoMateria2020 from 'assets/img/blog/fotoMateria2020.png';
import FotoMateria2019 from 'assets/img/blog/fotoMateria2019.png';
import './styles.css';

function BlogContent() {
  return (
    <div id="blogContentContainer">
      <div id="blogArticlesContainer">
        <BlogArticle
          imageUrl={FotoMateria2022}
          imageDescription="Avet Cursos - logo do artigo"
          articleTitle="Sucesso na Carreira: 5 dicas para auxiliar veterinários em 2022"
          articleText={`Lorem ipsum varius neque et nibh euismod amet lorem
            phasellus aliquam, conubia rutrum mauris eu pretium vulputate cras
            molestie. adipiscing non velit sapien rhoncus class nam vehicula
            taciti curae lacinia duis eu id, curabitur potenti molestie sagittis
            volutpat tempus feugiat nullam imperdiet molestie taciti duis.`}
        />

        <BlogArticle
          imageUrl={FotoMateria2021}
          imageDescription="Avet Cursos - logo do artigo"
          articleTitle="Sucesso na Carreira: 5 dicas para auxiliar veterinários em 2021"
          articleText={`Lorem ipsum varius neque et nibh euismod amet lorem
            phasellus aliquam, conubia rutrum mauris eu pretium vulputate cras
            molestie. adipiscing non velit sapien rhoncus class nam vehicula
            taciti curae lacinia duis eu id, curabitur potenti molestie sagittis
            volutpat tempus feugiat nullam imperdiet molestie taciti duis.`}
        />

        <BlogArticle
          imageUrl={FotoMateria2020}
          imageDescription="Avet Cursos - logo do artigo"
          articleTitle="Sucesso na Carreira: 5 dicas para auxiliar veterinários em 2020"
          articleText={`Lorem ipsum varius neque et nibh euismod amet lorem
            phasellus aliquam, conubia rutrum mauris eu pretium vulputate cras
            molestie. adipiscing non velit sapien rhoncus class nam vehicula
            taciti curae lacinia duis eu id, curabitur potenti molestie sagittis
            volutpat tempus feugiat nullam imperdiet molestie taciti duis.`}
        />

        <BlogArticle
          imageUrl={FotoMateria2019}
          imageDescription="Avet Cursos - logo do artigo"
          articleTitle="Sucesso na Carreira: 5 dicas para auxiliar veterinários em 2019"
          articleText={`Lorem ipsum varius neque et nibh euismod amet lorem
            phasellus aliquam, conubia rutrum mauris eu pretium vulputate cras
            molestie. adipiscing non velit sapien rhoncus class nam vehicula
            taciti curae lacinia duis eu id, curabitur potenti molestie sagittis
            volutpat tempus feugiat nullam imperdiet molestie taciti duis.`}
        />
      </div>

      <div id="btnVejaMaisMaterias">
        <span>{ToUpperCaseText('Veja mais Matérias')}</span>
      </div>
    </div>
  );
};

export default BlogContent;