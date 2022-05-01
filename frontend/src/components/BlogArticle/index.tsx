import { IBlogArticle } from 'utils/Types';
import { ToUpperCaseText } from 'utils/Functions';
import './styles.css';

function BlogArticle({
  imageUrl,
  imageDescription,
  articleTitle,
  articleText
}: IBlogArticle) {
  return (
    <div id='blogArticleContainer'>
      <div id="blogArticleLogoContainer">
        <img src={imageUrl} alt={imageDescription} />
      </div>
      <div id='blogArticleContent'>
        <div id='blogArticleTitle'>
          <span>{ToUpperCaseText(articleTitle)}</span>
        </div>
        <div id='blogArticleText'>
          <span>{articleText}</span>
        </div>
        <div id='btnLerMais'>
          <span>{ToUpperCaseText('Ler Mais')}</span>
        </div>
      </div>
    </div>
  );
};

export default BlogArticle;