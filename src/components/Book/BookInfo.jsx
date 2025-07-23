import Header from "../Layout/Header.jsx";
import Footer from "../Layout/Footer.jsx";

const Book = ({
  image,
  title,
  author,
  publisher,
  publisherData,
  description,
  infoLink,
}) => {
  return (
    <>
      <Header />
      <main>
        <section>
          <img src="#" alt="Book" />
          <span>Pag num</span>
        </section>
        <section>
          <h1>Title</h1>
          <h2>Author</h2>
          <div>
            <h2>Category</h2>
            <div>
              <h2>Publisher</h2>
              <h2>Publisher Data</h2>
            </div>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos soluta
            illo quia fugit, unde porro doloremque. Architecto quia iure,
            eligendi rem ducimus consectetur ipsam facere ipsa molestiae rerum
            est doloribus.
          </p>
          <a href="">Link</a>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Book;
