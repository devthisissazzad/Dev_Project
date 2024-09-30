import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

const MainLayout = () => {
  return (
    <div>
      <nav>
        <Navbar/>
      </nav>

      <div>
        <Outlet />
      </div>

      <footer>Footer</footer>
    </div>
  );
};

export default MainLayout;
