import { useState, useEffect } from "react";

const BookList = ({ getBooks, bookName }) => {
  const [showBooks, setShowBooks] = useState(false);

  const [books, setBooks] = useState([]);

  useEffect(() => {
    async function getBookList() {
      try {
        const response = await getBooks;

        console.log(response.items);

        if (response) setShowBooks(true);

        const itemsInfo = response.items;

        if (itemsInfo) {
          setBooks(itemsInfo);
          setShowBooks;
        }

        // itemsInfo.map(({ volumeInfo }) => {
        //   const {
        //     title,
        //     subtitle,
        //     publishedDate,
        //     printType,
        //     pageCount,
        //     language,
        //     infoLink,
        //   } = volumeInfo;
        //   console.log(volumeInfo);
        //   console.log(title, subtitle, publishedDate);
        // });

        return itemsInfo;
      } catch (e) {
        console.error(e);
      }
    }

    getBookList();
  }, [getBooks]);

  // const value = getBookList();

  function array() {
    return [1, 2, 3, 4];
  }

  function hey(callback) {
    console.log("here");
    return callback();
  }

  console.log(typeof array, typeof getBookList);

  /* 
        {showBooks ? {
        getBookList().map(({ volumeInfo }) => {
          return <li>{volumeInfo.title}</li>;
        })
      } : (
        <li>JAJAJAJJA</li>
      )}
  */

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
