"use client";
import React from "react";
import { RiRadioButtonLine } from "react-icons/ri";

import { useSwiper } from "swiper/react";

const Sliderbuttons = ({ className }) => {
  const swiper = useSwiper();
  return (
    <>
      <div>
        <button onClick={() => swiper.slideNext()} className={className}>
          <RiRadioButtonLine className="mr-5  hover:text-cyan-700" />
        </button>
        <button onClick={() => swiper.slidePrev()} className={className}>
          <RiRadioButtonLine className=" hover:text-cyan-700" />
        </button>
      </div>
    </>
  );
};

export default Sliderbuttons;
