import { useState, useEffect } from "react";
import googleBooks from "../services/googleBooks.js";
const apiKey = import.meta.env.VITE_API_KEY;

const useBooks = () => {
  const [bookName, setBookName] = useState("");

  const [books, setBooks] = useState([]);

  const [bookData, setBookData] = useState({});

  // async function getBooks() {
  //   try {
  //     let response;

  //     response = await fetch(
  //       `https://www.googleapis.com/books/v1/volumes?q=${bookName}&time&printType=all&keyes&key=${apiKey}`
  //     );

  //     if (!response.ok) return new Error(`Error API: ${response.status}`);

  //     // console.log(response);
  //     const data = await response.json();
  //     const bookItems = data.items;
  //     setBooks(bookItems);
  //     // console.log(bookItems);
  //   } catch (e) {
  //     console.error(e);
  //   }
  // }

  useEffect(() => {
    if (bookName) googleBooks(setBooks, bookName);
  }, [bookName]);

  useEffect(() => {
    // console.log(bookData);
  }, [bookData]);
  useEffect(() => {
    console.log(books);
  }, [books]);

  return {
    bookName,
    setBookName,
    books,
    bookData,
    setBookData,
  };
};

export default useBooks;
