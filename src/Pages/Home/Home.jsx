import React from "react";
import Shop from "../Shop/Shop";
import Navbar from "../../Components/Navbar/Navbar";
import Banner from "../../components/Banner/Banner";

const Home = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <Banner/>
      <Shop />
    </div>
  );
};

export default Home;
