import React from "react";
import Shop from "../Shop/Shop";
import Banner from "../Banner/Banner";
import Bistroboss from "../../components/Bistroboss/bistroboss";
import Onlineorder from "../../components/Onlineorder/onlineorder";

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
