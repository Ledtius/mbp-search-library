import { useState } from "react";
console.log();
const apiKey = import.meta.env.VITE_API_KEY;

function writeSomething(e) {
  const inputValue = e.value;
}

function App() {
  async function getBooks() {
    try {
      const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=the+oldman+and+the+sea&time&printType=all&keyes&key=${apiKey}`
      );

      if (!response.ok) return new Error(`Error API: ${response.status}`);

      const data = await response.json();

      const bookItems = data.items;

      bookItems.forEach((books) => {
        console.log(books.volumeInfo.title);
      });

      console.log(data);
    } catch (e) {
      console.error("sss" + e);
    }
  }

  getBooks();
  console.log("sdfsfd");

  return <></>;
}

export default App;
