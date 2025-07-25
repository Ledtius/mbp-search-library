import Header from "../Layout/Header.jsx";
import Footer from "../Layout/Footer.jsx";

import { Outlet } from "react-router";

const Layout = () => {

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
