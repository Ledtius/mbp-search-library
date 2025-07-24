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
          <h3>{authors}</h3>
          <h3>{language}</h3>
          <h3>{pageCount}</h3>
        </div>
      </section>
    </>
  );
};

export default BookPreview;
