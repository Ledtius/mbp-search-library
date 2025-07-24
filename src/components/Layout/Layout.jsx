import Header from "../layout/Header.jsx";
import Footer from "../layout/Footer.jsx";

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
