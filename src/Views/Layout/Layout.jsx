import React, { useEffect, useState } from "react";
import NavBar from "../../Components/Navbar/NavBar";
import { Outlet } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";

const Layout = () => {
  return (
    <>
      <div className="bg-gray-100">
        <NavBar />
        <Outlet />
        <Footer />
      </div>
    </>
  );
};

export default Layout;
