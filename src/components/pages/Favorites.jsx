import ContextBooks from "../../context/ContextBooks.js";
import { useContext } from "react";
import BookPreview from "../books/BookPreview.jsx";
import { Link } from "react-router";

const Favorites = () => {
  const { favBooks, setBookData } = useContext(ContextBooks);
  return (
    <>
      <ul>
        {favBooks.map(
          ({
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
            return (
              <li
                key={id}
                onClick={() => {
                  setBookData({
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
                  });
                }}
              >
                <BookPreview
                  id={id}
                  title={title}
                  authors={authors}
                  description={description}
                  language={language}
                  pageCount={pageCount}
                  volumeInfo={volumeInfo}
                  smallImg={smallImg}
                  normalImg={normalImg}
                  publishers={publishers}
                  publishedDate={publishedDate}
                  categories={categories}
                  previewLink={previewLink}
                />
                <Link to="/favorites/book-info">ss</Link>
              </li>
            );
          }
        )}
      </ul>
    </>
  );
};

export default Favorites;
