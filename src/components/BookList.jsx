import { useState, useEffect } from "react";
import BookPreview from "./BookPreview.jsx";

const BookList = ({ books, setBookData }) => {
  const [showBooks, setShowBooks] = useState(false);

  useEffect(() => {
    console.log(books);
    if (books.length > 0) setShowBooks(true);
  }, [books]);

  /* setBookData({
                  title: title,
                  authors: authors,
                  language: language,
                  pageCount: pageCount,
                  smallImg: smallImg,
                  normalImg: normalImg,
                  publishedDate: publishedDate,
                  publishers: publishers,
                  description: description,
                }) */

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
            <li
              key={id}
              onClick={() => {
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
