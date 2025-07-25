const BookPreview = ({ smallImg, title, authors, language, pageCount }) => {
  return (
    <>
      <section>
        <img
          src={`${
            smallImg ||
            `https://upload.wikimedia.org/wikipedia/commons/a/a3/Image-not-found.png`
          } `}
          alt="Book image"
        />
        <div>
          <h2>{title}</h2>
          <h4>{authors}</h4>
          <span>{language}</span>
          <span>{pageCount}</span>
        </div>
      </section>
    </>
  );
};

export default BookPreview;
