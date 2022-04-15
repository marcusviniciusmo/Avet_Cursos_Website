import { ToUpperCaseText } from 'utils/Functions';
import './styles.css';

type Props = {
  imageUrl: string,
  imageDescription: string,
  articleTitle: string,
  articleText: string
};

function BlogArticle({
  imageUrl,
  imageDescription,
  articleTitle,
  articleText
}: Props) {
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