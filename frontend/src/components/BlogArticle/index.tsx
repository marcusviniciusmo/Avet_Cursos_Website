import { IBlogArticle } from 'utils/Types';
import { ToUpperCaseText } from 'utils/Functions';
import { LabelButton } from 'utils/Mocks/BlogArticle';
import './styles.css';

function BlogArticle({
  image,
  articleTitle,
  articleText
}: IBlogArticle) {
  return (
    <div id='blogArticleContainer'>
      <div id="blogArticleLogoContainer">
        <img src={image.url} alt={image.description} />
      </div>
      <div id='blogArticleContent'>
        <div id='blogArticleTitle'>
          <span>{ToUpperCaseText(articleTitle)}</span>
        </div>
        <div id='blogArticleText'>
          <span>{articleText}</span>
        </div>
        <div id='btnLerMais'>
          <span>{ToUpperCaseText(LabelButton)}</span>
        </div>
      </div>
    </div>
  );
};

export default BlogArticle;