import { useEffect, useState } from "react";

import Header from "./components/Layout/Header.jsx";
import Main from "./components//Layout/Main.jsx";
import Footer from "./components/Layout/Footer.jsx";
import BookInfo from "./components/Book/BookInfo.jsx";

const apiKey = import.meta.env.VITE_API_KEY;

function App() {
  const [bookName, setBookName] = useState("");

  const [books, setBooks] = useState([]);

  const [booksData, setBooksData] = useState({});

  async function getBooks() {
    try {
      let response;

      response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${bookName}&time&printType=all&keyes&key=${apiKey}`
      );

      if (!response.ok) return new Error(`Error API: ${response.status}`);

      const data = await response.json();

      const bookItems = data.items;
      console.log("Books...");
      setBooks(bookItems);

      return bookItems;
    } catch (e) {
      console.error(e);
    }
  }

  useEffect(() => {
    if (bookName) getBooks();
  }, [bookName]);

  useEffect(() => {
    console.log(booksData);
  }, [booksData]);

  return (
    <>
      {/* <Header /> */}
      <Main
        setBookName={setBookName}
        books={bookName ? books : ""}
        setBooksData={setBooksData}
      />
      <BookInfo />
      {/* <Footer /> */}
    </>
  );
}

export default App;
