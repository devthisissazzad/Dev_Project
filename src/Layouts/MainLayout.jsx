import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Header/Navbar/Navbar";
import Container from "../Utils/Container/Container";
import Footer from "../components/Footer/Footer";

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
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default MainLayout;
