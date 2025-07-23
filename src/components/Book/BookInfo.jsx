import Header from "../Layout/Header.jsx";
import Footer from "../Layout/Footer.jsx";
import { useEffect } from "react";
const Book = ({ bookData = {} }) => {
  console.log(bookData);

  useEffect(() => {
    console.log(bookData);
  }, [bookData]);

  const {
    title,
    authors,
    description,
    language,
    pageCount,
    volumeInfo,
    smallImg,
    normalImg,
    publishers,
    publishedDate,
    categories,
    previewLink,
  } = bookData;

  console.log(previewLink);
  return (
    <>
      <Header />
      <main>
        <section>
          <img src={normalImg} alt="Book" />
          <span>{pageCount}</span>
        </section>
        <section>
          <h1>{title}</h1>
          <h2>{authors}</h2>
          <div>
            <h2>{categories}</h2>
            <div>
              <h2>{publishers}</h2>
              <h2>{publishedDate}</h2>
            </div>
          </div>
          <p>{description}</p>
          <a href={previewLink} target="_blank">
            Link del libro
          </a>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Book;
