import { useEffect, useState } from "react";

import Header from "./components/Header.jsx";
import List from "./components/List.jsx";
import Form from "./components/Form.jsx";
import Footer from "./components/Footer.jsx";

const apiKey = import.meta.env.VITE_API_KEY;

function App() {
  const [bookSearch, setBookSearch] = useState("");

  console.log(bookSearch);
  async function getBooks() {
    try {
      let response;

      if (!bookSearch) {
        response = await fetch(
          `https://www.googleapis.com/books/v1/volumes?q=${bookSearch}&time&printType=all&keyes&key=${apiKey}`
        );
      } else {
        response = await fetch(
          `https://www.googleapis.com/books/v1/volumes?q=&time&printType=all&keyes&key=${apiKey}`
        );
      }
    
      if (!response.ok) return new Error(`Error API: ${response.status}`);

      const data = await response.json();

      const bookItems = data.items;

      bookItems.forEach((books) => {
        console.log(books.volumeInfo.title);
      });
      console.log(data);
      return data;
    } catch (e) {
      console.error("sss" + e);
    }
  }

  getBooks();

  return (
    <>
      <Header />
      <Form />
      <List />
      <Footer />
    </>
  );
}

export default App;
