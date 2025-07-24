import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router";

import Layout from "./components/layout/Layout.jsx";

import Home from "./components/pages/Home.jsx";

import BookInfo from "./components/books/BookInfo.jsx";

import AboutUs from "./components/pages/AboutUs.jsx";

const apiKey = import.meta.env.VITE_API_KEY;

function App() {
  const [bookName, setBookName] = useState("");

  const [books, setBooks] = useState([]);

  const [bookData, setBookData] = useState({});

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
    console.log(bookData);
  }, [bookData]);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />

            <Route path="about-us" element={<AboutUs />} />
            <Route path="book-info" element={<BookInfo />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
