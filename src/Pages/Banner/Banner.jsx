import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import banner_1 from "./../../assets/Banner_Images/banner.png";

const Banner = () => {
  return (
    <Carousel className=" text-center" showStatus={false} autoPlay infiniteLoop>
      <div>
        <img src={banner_1} />
      </div>
      <div>
        <img src={banner_1} />
      </div>
      <div>
        <img src={banner_1} />
      </div>
      <div>
        <img src={banner_1} />
      </div>
    </Carousel>
  );
};

export default Banner;
