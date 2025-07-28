import ContextBooks from "../../context/ContextBooks.js";
import { useContext } from "react";
import BookPreview from "../books/BookPreview.jsx";

const Favorites = () => {
  const { favBooks } = useContext(ContextBooks);
  console.log("Faav");
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
              </li>
            );
          }
        )}
      </ul>
    </>
  );
};

export default Favorites;
