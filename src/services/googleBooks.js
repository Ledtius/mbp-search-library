const apiKey = import.meta.env.VITE_API_KEY;

async function googleBooks(setBooks, bookName) {
  try {
    let response;

    response = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${bookName}&time&printType=all&key=${apiKey}`
    );

    if (!response.ok) return new Error(`Error API: ${response.status}`);

    // console.log(response);
    const data = await response.json();

    const bookItems = data.items;

    if (!bookItems || !Array.isArray(bookItems)) return;

    setBooks(bookItems);
    // console.log(bookItems);
  } catch (e) {
    console.error(e);
  }
}

export default googleBooks;
