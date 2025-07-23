import Header from "../Layout/Header.jsx";
import Footer from "../Layout/Footer.jsx";
import { Link } from "react-router";

const Book = ({ bookData }) => {
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
          <a href="#">{previewLink}</a>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Book;
