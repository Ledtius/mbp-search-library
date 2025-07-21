import { useState, useEffect } from "react";

const BookList = ({ books }) => {
  const [showBooks, setShowBooks] = useState(false);

  const [asyncBooks, setAsyncBooks] = useState([]);
  // async function extractPromise() {
  //   const response = await books;

  //   if (!response) return;

  //   setAsyncBooks(response);
  // }

  useEffect(() => {
    console.log(books);
    if (books.length > 0) setShowBooks(true);
  }, [books]);

  // console.log(books);
  useEffect(() => {
    console.log(showBooks);
    // console.log();
  }, [showBooks]);

  return (
    <>
      {showBooks ? (
        books.map(({ volumeInfo, id }) => {
          return (
            <li key={id}>
              <section>
                <img
                  src={`${
                    volumeInfo?.imageLinks?.smallThumbnail ||
                    `https://upload.wikimedia.org/wikipedia/commons/a/a3/Image-not-found.png`
                  } `}
                  alt="Book image"
                />
                <div>
                  <h2>{volumeInfo.title}</h2>
                  <h3>{volumeInfo.authors}</h3>
                  <h3>{volumeInfo.language}</h3>
                  <h3>{volumeInfo.pageCount}</h3>
                </div>
              </section>
            </li>
          );
        })
      ) : (
        <li>JAJAJAJJA</li>
      )}
    </>
  );
};

export default BookList;
