import React from "react";
import Navbar from "./Navbar/navbar";
import Footer from "./Footer/footer";

function MainLayout() {
  return (
    <>
      <Navbar />
      <main>{props.children}</main>
      <Footer />
    </>
  );
}

export default MainLayout;
