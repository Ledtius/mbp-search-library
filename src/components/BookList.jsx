import { useState, useEffect } from "react";

const BookList = ({ getBooks }) => {
  const [showBooks, setShowBooks] = useState(false);
  useEffect(() => {
    console.log(showBooks);
  }, [showBooks]);

  async function getBookList() {
    try {
      const response = await getBooks;

      console.log(response.items);

      if (response) setShowBooks(true);

      const itemsInfo = response.items;

      itemsInfo.map(({ volumeInfo }) => {
        const { title, subtitle, publishedDate } = volumeInfo;
        console.log(volumeInfo);
        console.log(title, subtitle, publishedDate);
      });

      return response.items;
    } catch (e) {
      console.error(e);
    }
  }

  getBookList();

  return <>{showBooks ? <li>sfs</li> : <li>JAJAJAJJA</li>}</>;
};

export default BookList;
