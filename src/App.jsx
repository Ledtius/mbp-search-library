import { useEffect, useState } from "react";

import Header from "./components/Header.jsx";
import BookList from "./components/BookList.jsx";
import Form from "./components/Form.jsx";
import Footer from "./components/Footer.jsx";

const apiKey = import.meta.env.VITE_API_KEY;

function App() {
  const [bookName, setBookName] = useState("");

  const [books, setBooks] = useState([]);

  async function getBooks() {
    try {
      let response;

      response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${bookName}&time&printType=all&keyes&key=${apiKey}`
      );

      if (!response.ok) return new Error(`Error API: ${response.status}`);

      const data = await response.json();

      const bookItems = data.items;

      setBooks(bookItems);

      console.log(bookItems);
      console.log(books);
      bookItems.forEach((books) => {
        // console.log(books.volumeInfo);
      });

      // console.log(data);
    } catch (e) {
      console.error(e);
    }
  }

  console.log(`bookname: ${bookName}`);
  useEffect(() => {
    // if (bookName) getBooks();
    // if (bookName) getBooks();

    console.log(`books: ${books}`);
  }, [bookName]);

  return (
    <>
      <Header />
      <Form setBookName={setBookName} />
      <BookList books={bookName ? "Changed" : ""} bookName={bookName} />
      <Footer />
    </>
  );
}

export default App;
