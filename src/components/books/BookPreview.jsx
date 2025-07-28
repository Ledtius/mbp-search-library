import FavBtn from "./FavBtn.jsx";
import { Link } from "react-router";

const BookPreview = ({
  id,
  title,
  authors,
  language,
  smallImg,
  pageCount,
  description,
  volumeInfo,
  normalImg,
  publishers,
  publishedDate,
  categories,
  previewLink,
}) => {
  const bookDataLocal = {
    id,
    title,
    authors,
    language,
    smallImg,
    pageCount,
    description,
    volumeInfo,
    normalImg,
    publishers,
    publishedDate,
    categories,
    previewLink,
  };

  return (
    <>
      <section>
        <Link to="book-info">
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
        </Link>

        <FavBtn bookDataLocal={bookDataLocal} idBook={id} />
      </section>
    </>
  );
};

export default BookPreview;
