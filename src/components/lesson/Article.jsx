const Article = ({ title, text, isPublished }) => {
  return (
    <div className="article">
      {isPublished ? (
        <>
          <h3 className="article-title">{title}</h3>
          <p>{text}</p>
        </>
      ) : (
        <p className="article-hidden">Стаття прихована</p>
      )}
    </div>
  );
};

export default Article;
