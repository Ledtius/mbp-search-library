import { useState, useEffect } from "react";

const BookList = ({ books }) => {
  const [showBooks, setShowBooks] = useState(false);

  useEffect(() => {
    console.log(books);
    if (books) setShowBooks(true);
  }, []);

  return (
    <>
      {showBooks ? (
        books.map(({ volumeInfo, id }) => {
          return <li key={id}>{volumeInfo.title}</li>;
        })
      ) : (
        <li>JAJAJAJJA</li>
      )}
    </>
  );
};

export default BookList;
