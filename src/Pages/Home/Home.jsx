import React from "react";
import Shop from "../Shop/Shop";
import Banner from "../../components/Banner/Banner";
import Onlineorder from "../../components/Onlineorder/onlineorder";
import Bistroboss from "../../components/Bistroboss/bistroboss";

const Home = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <Banner />
      <Onlineorder />
      <Bistroboss />
      <Shop />
    </div>
  );
};

export default Home;
