import { useState, useEffect } from "react";

const BookList = ({ books, bookName }) => {
  const [showBooks, setShowBooks] = useState(false);

  useEffect(() => {
    console.log(`Can you hear me? ${books}`);

    if (books) setShowBooks(true);
  }, [bookName]);
  // console.log(bookName);
  // console.log(books);

  return (
    <>
      {/* {showBooks ? (
        books.map(({ volumeInfo, id }) => {
          return <li key={id}>{volumeInfo.title}</li>;
        })
      ) : (
        <li>JAJAJAJJA</li>
      )} */}
    </>
  );
};

export default BookList;
