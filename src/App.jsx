import useBooks from "./hooks/useBooks.js";
import ContextBooks from "./context/ContextBooks.js";
import { BrowserRouter, Routes, Route } from "react-router";

import Layout from "./components/layout/Layout.jsx";

import Home from "./components/pages/Home.jsx";

import BookInfo from "./components/books/BookInfo.jsx";

import AboutUs from "./components/pages/AboutUs.jsx";

function App() {
  const { bookName, books, bookData, setBookName, setBookData } = useBooks();

  return (
    <>
      <ContextBooks.Provider
        value={{ bookName, books, bookData, setBookName, setBookData }}
      >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />

              <Route path="about-us" element={<AboutUs />} />

              <Route path="book-info" element={<BookInfo />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ContextBooks.Provider>
    </>
  );
}

export default App;
