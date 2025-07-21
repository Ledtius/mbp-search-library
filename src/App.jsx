import { useEffect, useState } from "react";

import Header from "./components/Header.jsx";
import BookList from "./components/BookList.jsx";
import Form from "./components/Form.jsx";
import Footer from "./components/Footer.jsx";

const apiKey = import.meta.env.VITE_API_KEY;

function App() {
  const [bookName, setBookName] = useState("");

  const [books, setBooks] = useState([]);
  const [hello, setHello] = useState("");

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



  return (
    <>
      <Header />
      <Form setBookName={setBookName} />
      <BookList books={bookName ? books : ""} />
      <Footer />
    </>
  );
}

export default App;
