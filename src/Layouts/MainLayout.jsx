import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./../components/Navbar/Footer";

const MainLayout = () => {
  return (
    <div>
      <nav>Header</nav>

      <div>
        <Outlet />
      </div>

      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
