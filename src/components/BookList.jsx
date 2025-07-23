import { useState, useEffect } from "react";
import BookPreview from "./BookPreview.jsx";

const BookList = ({ books }) => {
  const [showBooks, setShowBooks] = useState(false);

  useEffect(() => {
    console.log(books);
    if (books.length > 0) setShowBooks(true);
  }, [books]);

  return (
    <>
      {showBooks ? (
        books.map(({ volumeInfo, id }) => {
          const { title, authors, language, pageCount } = volumeInfo;
          return (
            <BookPreview
              key={id}
              preview={volumeInfo?.imageLinks?.smallThumbnail}
              title={title}
              authors={authors}
              language={language}
              pageCount={pageCount}
            />
          );
        })
      ) : (
        <li>Lista vacia</li>
      )}
    </>
  );
};

export default BookList;
