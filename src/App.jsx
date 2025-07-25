import useBooks from "./hooks/useBooks.js";
import { BrowserRouter, Routes, Route } from "react-router";

import Layout from "./components/layout/Layout.jsx";

import Home from "./components/pages/Home.jsx";

import BookInfo from "./components/books/BookInfo.jsx";

import AboutUs from "./components/pages/AboutUs.jsx";

function App() {
  const { bookData, bookName, books, setBookName, setBookData } = useBooks();
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route
              index
              element={
                <Home
                  setBookName={setBookName}
                  books={bookName ? books : []}
                  setBookData={setBookData}
                />
              }
            />

            <Route path="about-us" element={<AboutUs />} />

            <Route
              path="book-info"
              element={<BookInfo bookData={bookData} />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
