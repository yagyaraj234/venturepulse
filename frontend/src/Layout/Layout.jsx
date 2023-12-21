import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div >
      <Header />
      <div className="min-h-[30vh]">

      {children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
