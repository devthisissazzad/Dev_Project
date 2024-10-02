import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const MainLayout = () => {
  return (
    <div>
      <nav>
        <Navbar />
      </nav>

      <div>
        <Outlet />
      </div>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default MainLayout;
