import React from "react";
import Navbar from "../navbar/Navbar";
import { Outlet } from "react-router";
import Footer from "../../pages/footer/Footer";

const MainLayout = () => {
  return (
    <div className="">
          <Navbar />
          <Outlet />
          <Footer />
    </div>
  );
};

export default MainLayout;
