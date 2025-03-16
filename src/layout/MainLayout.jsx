import React from "react";
import { Navbar } from "../pages/shared/navbar";
import { Outlet } from "react-router-dom";
import { Footer } from "../pages/shared/footer";

export const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};
