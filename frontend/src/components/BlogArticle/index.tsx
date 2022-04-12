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
    <>
      <img src={imageUrl} alt={imageDescription} />
      <h4>{articleTitle}</h4>
      <h5>{articleText}</h5>
      <h3>AQUI VAI UM BOTÃO</h3>
      <h5>Ler Mais</h5>
    </>
  );
};

export default BlogArticle;