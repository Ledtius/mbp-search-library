import ContextBooks from "../../context/ContextBooks.js";
import { useContext } from "react";
import BookPrevFav from "../books/BookPrevFav.jsx";

const Favorites = () => {
  const { favBooks } = useContext(ContextBooks);
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
              <li key={id}>
                <BookPrevFav
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
              </li>
            );
          }
        )}
      </ul>
    </>
  );
};

export default Favorites;
