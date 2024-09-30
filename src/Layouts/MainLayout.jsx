import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Header/Navbar/Navbar";
import Container from "../Utils/Container/Container";

const MainLayout = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="pt-20">
        <Container>
          <Outlet />
        </Container>
      </div>
    </div>
  );
};

export default MainLayout;
