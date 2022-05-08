import { useState } from "react";
import { ToUpperCaseText } from "utils/Functions";
import {
  Articles,
  NumberArticlesDisplayed,
  LabelButtonLessContent,
  LabelButtonMoreContent
} from 'utils/Mocks/BlogContent';
import BlogArticle from "components/BlogArticle";
import './styles.css';

function BlogContent() {
  const [showAll, setShowAll] = useState(false);

  const handleShowAll = () => {
    setShowAll(!showAll);
  };

  return (
    <div id="blogContentContainer">
      <div id="blogArticlesContainer">
        {
          showAll
            ? Articles.map((article) => {
              return (
                <BlogArticle
                  image={article.content.image}
                  articleTitle={article.content.articleTitle}
                  articleText={article.content.articleText}
                />
              )
            }).reverse()
            : Articles.filter(article => article.id > (
              Articles.length - NumberArticlesDisplayed))
              .map((article) => {
                return (
                  <BlogArticle
                    image={article.content.image}
                    articleTitle={article.content.articleTitle}
                    articleText={article.content.articleText}
                  />
                )
              }).reverse()
        }
      </div>

      <div id="btnVejaMaisMaterias">
        {
          <span onClick={handleShowAll}>
            {ToUpperCaseText(showAll
              ? LabelButtonLessContent
              : LabelButtonMoreContent)}
          </span>
        }
      </div>
    </div>
  );
};

export default BlogContent;