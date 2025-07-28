import { useEffect } from "react";
import { useContext } from "react";
import ContextBooks from "../../context/ContextBooks.js";
import FavBtn from "./FavBtn.jsx";

const Book = () => {
  const { bookData } = useContext(ContextBooks);

  console.log(bookData);
  console.log("bookData");

  useEffect(() => {
    console.log(bookData);
  }, [bookData]);

  const {
    id,
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


  console.log(id);
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
          <h3>{categories}</h3>
          <div>
            <h4>{publishers}</h4>
            <span>{publishedDate}</span>
          </div>
        </div>
        <p>{description}</p>
        <a href={previewLink} target="_blank">
          Link del libro
        </a>
        <FavBtn idBook={id} bookDataLocal={bookData} />
      </section>
    </>
  );
};

export default Book;
