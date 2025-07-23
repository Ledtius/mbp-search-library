import Header from "./Layout/Header.jsx";
import Main from "./Layout/Main.jsx";
import Footer from "./Layout/Footer.jsx";

const Layout = ({ setBookName, setBookData, bookData, books, bookName }) => {
  return (
    <>
      <Header />
      <Main
        setBookName={setBookName}
        books={bookName ? books : ""}
        setBookData={setBookData}
        bookData={bookData}
      />
      <Footer />
    </>
  );
};

export default Layout;
