import React from "react";
import Navbar from "../components/Header/Navbar";
import Footer from "../components/Footer/Footer";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <ToastContainer autoClose={2000} />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
