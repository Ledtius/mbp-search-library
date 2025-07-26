import { useContext } from "react";
import ContextBooks from "../../context/ContextBooks.js";
import { Link } from "react-router";

const BookPreview = ({
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

  const { favBooks, setFavBooks } = useContext(ContextBooks);
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
        <button
          onClick={() => {
            localStorage.setItem(
              "favBooks",
              JSON.stringify([...favBooks, bookDataLocal])
            );

            setFavBooks((c) => {
              return [...c, bookDataLocal];
            });
          }}
        >
          Añadir a favorito
        </button>
      </section>
    </>
  );
};

export default BookPreview;
