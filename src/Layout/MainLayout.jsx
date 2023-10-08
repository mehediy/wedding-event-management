import React from "react";
import Navbar from "../components/Header/Navbar";
import Footer from "../components/Footer/Footer";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";

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
