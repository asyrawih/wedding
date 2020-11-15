import React, { useEffect, useRef } from "react";
import { Footer } from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import MobileNavbar from "../components/MobileNavbar/MobileNavbar";

const Layout = ({ children }) => {


  return (
    <>
      <div id="body" className="flex flex-col h-screen">
        <Header />
        <main className="flex-1 p-3 ">
          {children}
          <Footer />
        </main>
        <MobileNavbar />
      </div>
    </>
  );
};

export default Layout;
