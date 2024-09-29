import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Container from "../../Utils/Container/Container";
import { FaQuoteLeft } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { useMediaQuery } from "react-responsive";

import "./slider.css";

import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

export default function SimpleSlider() {
  const isSmallOrMediumDevice = useMediaQuery({ query: "(max-width: 1536px)" });
  const SamplePrevArrow = (props) => {
    const { className, style, onClick } = props;
    if (isSmallOrMediumDevice) {
      return null; // Return null to hide the arrow button
    }
    return (
      <div onClick={onClick} className={`arrow ${className}`}>
        <FaChevronLeft class="arrows" />
      </div>
    );
  };

  const SampleNextArrow = (props) => {
    const { className, style, onClick } = props;
    if (isSmallOrMediumDevice) {
      return null; // Return null to hide the arrow button
    }
    return (
      <div onClick={onClick} className={`arrow ${className}`}>
        <FaChevronRight class="arrows" />
      </div>
    );
  };

  const settings = {
    dots: true,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    className: "slides",
    nextArrow: <SampleNextArrow to="next" />,
    prevArrow: <SamplePrevArrow to="prev" />,
  };
  return (
    <Container>
      <div className="slides">
        <Slider {...settings}>
          <div className=" justify-items-center">
            <div className="flex justify-center items-center pt-12 sm:pt-6 md:pt-6 lg:pt-6 xl:pt-12 2xl:pt-12">
              <FaStar className="text-yellow2 h-12 w-12 sm:h-8 sm:w-8 md:h-8 md:w-8 lg:h-8 lg:w-8 xl:h-12 xl:w-12 2xl:h-12 2xl:w-12" />
              <FaStar className="text-yellow2 h-12 w-12 sm:h-8 sm:w-8 md:h-8 md:w-8 lg:h-8 lg:w-8 xl:h-12 xl:w-12 2xl:h-12 2xl:w-12" />
              <FaStar className="text-yellow2 h-12 w-12 sm:h-8 sm:w-8 md:h-8 md:w-8 lg:h-8 lg:w-8 xl:h-12 xl:w-12 2xl:h-12 2xl:w-12" />
              <FaStar className="text-yellow2 h-12 w-12 sm:h-8 sm:w-8 md:h-8 md:w-8 lg:h-8 lg:w-8 xl:h-12 xl:w-12 2xl:h-12 2xl:w-12" />
              <FaStar className="text-dark4 h-12 w-12 sm:h-8 sm:w-8 md:h-8 md:w-8 lg:h-8 lg:w-8 xl:h-12 xl:w-12 2xl:h-12 2xl:w-12" />
            </div>
            <div className="flex justify-center items-center pt-12 sm:pt-6 md:pt-6 lg:pt-6 xl:pt-12 2xl:pt-12">
              <FaQuoteLeft className="text-dark1 h-15 w-18 sm:h-18 sm:w-20 md:h-18 md:w-20 lg:h-16 lg:w-18 xl:h-20 xl:w-24 2xl:h-20 2xl:w-24" />
            </div>
            <div className="mx-auto w-[50%]">
              <p className="text-center text-[20px] font-normal font-inter text-dark2 pt-10 sm:text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px] sm:pt-6 md:pt-6 lg:pt-6 xl:pt-12 2xl:pt-10">
                Various version have evolved over the years, sometimes by
                accident, sometimes on purpose (injected humour and the like).
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
              </p>
            </div>
            <div className="flex justify-center items-center">
              <h4 className="text-[32px] font-medium font-inter text-yellow2 uppercase pt-1 sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] 2xl:text-[32px] ">
                John Smith
              </h4>
            </div>
          </div>
          <div className=" justify-items-center">
            <div className="flex justify-center items-center pt-12 sm:pt-6 md:pt-6 lg:pt-6 xl:pt-12 2xl:pt-12">
              <FaStar className="text-yellow2 h-12 w-12 sm:h-8 sm:w-8 md:h-8 md:w-8 lg:h-8 lg:w-8 xl:h-12 xl:w-12 2xl:h-12 2xl:w-12" />
              <FaStar className="text-yellow2 h-12 w-12 sm:h-8 sm:w-8 md:h-8 md:w-8 lg:h-8 lg:w-8 xl:h-12 xl:w-12 2xl:h-12 2xl:w-12" />
              <FaStar className="text-yellow2 h-12 w-12 sm:h-8 sm:w-8 md:h-8 md:w-8 lg:h-8 lg:w-8 xl:h-12 xl:w-12 2xl:h-12 2xl:w-12" />
              <FaStar className="text-yellow2 h-12 w-12 sm:h-8 sm:w-8 md:h-8 md:w-8 lg:h-8 lg:w-8 xl:h-12 xl:w-12 2xl:h-12 2xl:w-12" />
              <FaStar className="text-dark4 h-12 w-12 sm:h-8 sm:w-8 md:h-8 md:w-8 lg:h-8 lg:w-8 xl:h-12 xl:w-12 2xl:h-12 2xl:w-12" />
            </div>
            <div className="flex justify-center items-center pt-12 sm:pt-6 md:pt-6 lg:pt-6 xl:pt-12 2xl:pt-12">
              <FaQuoteLeft className="text-dark1 h-15 w-18 sm:h-18 sm:w-20 md:h-18 md:w-20 lg:h-16 lg:w-18 xl:h-20 xl:w-24 2xl:h-20 2xl:w-24" />
            </div>
            <div className="mx-auto w-[50%]">
              <p className="text-center text-[20px] font-normal font-inter text-dark2 pt-10 sm:text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px] sm:pt-6 md:pt-6 lg:pt-6 xl:pt-12 2xl:pt-10">
                Various version have evolved over the years, sometimes by
                accident, sometimes on purpose (injected humour and the like).
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
              </p>
            </div>
            <div className="flex justify-center items-center">
              <h4 className="text-[32px] font-medium font-inter text-yellow2 uppercase pt-1 sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] 2xl:text-[32px] ">
                John Smith
              </h4>
            </div>
          </div>
          <div className=" justify-items-center">
            <div className="flex justify-center items-center pt-12 sm:pt-6 md:pt-6 lg:pt-6 xl:pt-12 2xl:pt-12">
              <FaStar className="text-yellow2 h-12 w-12 sm:h-8 sm:w-8 md:h-8 md:w-8 lg:h-8 lg:w-8 xl:h-12 xl:w-12 2xl:h-12 2xl:w-12" />
              <FaStar className="text-yellow2 h-12 w-12 sm:h-8 sm:w-8 md:h-8 md:w-8 lg:h-8 lg:w-8 xl:h-12 xl:w-12 2xl:h-12 2xl:w-12" />
              <FaStar className="text-yellow2 h-12 w-12 sm:h-8 sm:w-8 md:h-8 md:w-8 lg:h-8 lg:w-8 xl:h-12 xl:w-12 2xl:h-12 2xl:w-12" />
              <FaStar className="text-yellow2 h-12 w-12 sm:h-8 sm:w-8 md:h-8 md:w-8 lg:h-8 lg:w-8 xl:h-12 xl:w-12 2xl:h-12 2xl:w-12" />
              <FaStar className="text-dark4 h-12 w-12 sm:h-8 sm:w-8 md:h-8 md:w-8 lg:h-8 lg:w-8 xl:h-12 xl:w-12 2xl:h-12 2xl:w-12" />
            </div>
            <div className="flex justify-center items-center pt-12 sm:pt-6 md:pt-6 lg:pt-6 xl:pt-12 2xl:pt-12">
              <FaQuoteLeft className="text-dark1 h-15 w-18 sm:h-18 sm:w-20 md:h-18 md:w-20 lg:h-16 lg:w-18 xl:h-20 xl:w-24 2xl:h-20 2xl:w-24" />
            </div>
            <div className="mx-auto w-[50%]">
              <p className="text-center text-[20px] font-normal font-inter text-dark2 pt-10 sm:text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px] sm:pt-6 md:pt-6 lg:pt-6 xl:pt-12 2xl:pt-10">
                Various version have evolved over the years, sometimes by
                accident, sometimes on purpose (injected humour and the like).
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
              </p>
            </div>
            <div className="flex justify-center items-center">
              <h4 className="text-[32px] font-medium font-inter text-yellow2 uppercase pt-1 sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] 2xl:text-[32px] ">
                John Smith
              </h4>
            </div>
          </div>
        </Slider>
      </div>
    </Container>
  );
}
