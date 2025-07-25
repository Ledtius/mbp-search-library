import BookPreview from "./BookPreview.jsx";
import { useState, useEffect } from "react";
import ContextBooks from "../../ContextBooks.js";
import { useContext } from "react";
import { Link } from "react-router";

const BookList = () => {
  const [showBooks, setShowBooks] = useState(false);

  const { books, setBookData } = useContext(ContextBooks);

  useEffect(() => {
    console.log(books);
    if (books.length > 0) setShowBooks(true);
  }, [books]);

  return (
    <>
      {showBooks ? (
        books.map(({ volumeInfo, id }) => {
          const {
            title,
            authors,
            language,
            pageCount,
            description,
            categories,
            previewLink,
          } = volumeInfo;

          const smallImg = volumeInfo?.imageLinks?.smallThumbnail;

          const normalImg = volumeInfo?.imageLinks?.thumbnail;

          const publishers = volumeInfo.publisher;

          const publishedDate = volumeInfo.publishedDate;

          return (
            <li key={id}>
              <Link
                to="book-info"
                onClick={() => {
                  console.log("click");
                  setBookData({
                    title,
                    authors,
                    description,
                    language,
                    pageCount,
                    volumeInfo,
                    smallImg,
                    normalImg,
                    publishers,
                    publishedDate,
                    categories,
                    previewLink,
                  });
                }}
              >
                <BookPreview
                  smallImg={smallImg}
                  title={title}
                  authors={authors}
                  language={language}
                  pageCount={pageCount}
                />
              </Link>
            </li>
          );
        })
      ) : (
        <li>Lista vacia</li>
      )}
    </>
  );
};

export default BookList;
