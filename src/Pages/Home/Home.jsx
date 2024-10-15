import React from "react";
import Banner from "../Banner/Banner";
import Shop from "../Shop/Shop";
import Banner from "../../components/Banner/Banner";
import Onlineorder from "../../components/Onlineorder/onlineorder";
import Bistroboss from "../../components/Bistroboss/bistroboss";

const Home = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <Banner />
      <Bistroboss />
      <Shop />
    </div>
  );
};

export default Home;
