import React from "react";
import Navbar from "../components/Navbar";
import Home from "../pages/Home";
import Footer from "../components/Footer";
import { Outlet } from "react-router";
import WhatsAppButton from "../components/WhatsAppButton";

const Root = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <WhatsAppButton />
      <Footer></Footer>
    </div>
  );
};

export default Root;
