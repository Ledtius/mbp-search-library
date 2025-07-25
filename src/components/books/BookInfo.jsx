import { useEffect } from "react";
import { useContext } from "react";
import ContextBooks from "../../context/ContextBooks.js";

const Book = () => {
  const { bookData } = useContext(ContextBooks);

  console.log(bookData);
  console.log("bookData");

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
      <section>
        <img
          src={
            normalImg ||
            `https://upload.wikimedia.org/wikipedia/commons/a/a3/Image-not-found.png`
          }
          alt="Book"
        />
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
    </>
  );
};

export default Book;
