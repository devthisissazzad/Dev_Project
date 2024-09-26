import React from "react";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div>
      <nav>Header</nav>

      <div>
        <Outlet />
      </div>

      <footer>Footer</footer>
    </div>
  );
};

export default MainLayout;
