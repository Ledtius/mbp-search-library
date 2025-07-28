import useBooks from "./hooks/useBooks.js";
import useStorage from "./hooks/useStorage.js";
import ContextBooks from "./context/ContextBooks.js";
import { BrowserRouter, Routes, Route } from "react-router";

import { useState } from "react";

import Layout from "./components/Layout/Layout.jsx";

import Home from "./components/pages/Home.jsx";

import BookInfo from "./components/books/BookInfo.jsx";

import Favorites from "./components/pages/Favorites.jsx";

import AboutUs from "./components/pages/AboutUs.jsx";

function App() {
  const { bookName, books, bookData, setBookName, setBookData } = useBooks();

    console.log("App");
  const { favBooks, setFavBooks } = useStorage();
  return (
    <>
      <ContextBooks.Provider
        value={{
          bookName,
          books,
          bookData,
          setBookName,
          setBookData,
          favBooks,
          setFavBooks,
        }}
      >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />

              <Route path="about-us" element={<AboutUs />} />

              <Route path="book-info" element={<BookInfo />} />

              <Route path="favorites" element={<Favorites />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ContextBooks.Provider>
    </>
  );
}

export default App;
