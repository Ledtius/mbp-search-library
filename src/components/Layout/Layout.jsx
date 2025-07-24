import Header from "../layout/Header.jsx";
import Footer from "../layout/Footer.jsx";

import { Outlet } from "react-router";

const Layout = () => {
  /*
  
  { setBookName, setBookData, bookData, books, bookName }
  <Main
        setBookName={setBookName}
        books={bookName ? books : ""}
        setBookData={setBookData}
        bookData={bookData}
      /> */

  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
