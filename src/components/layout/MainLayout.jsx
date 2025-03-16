import React from "react";
import { Navbar } from "../ui/navbar";
import { Outlet } from "react-router-dom";
import { Footer } from "../ui/footer";

export const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};
