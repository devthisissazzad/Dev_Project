import React from "react";
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="flex items-center">
      <div className="w-full text-white font-inter">
        {/* /// footer left and right side */}
        <div className="flex flex-col lg:flex-row">
          {/* /// left side */}
          <div
            className=" bg-[#1F2937] flex flex-col items-center justify-center w-full gap-6 py-24 bg-blue_gray-900 pl-14 pr-[150px]
          lg:py-8 lg:pr-8 md:p-5 sm:p-4
          "
          >
            <a
              className="mr-[30px] lg:text-[27px] md:mr-0 md:text-[26px] sm:text-[24px]"
              href="#"
            >
              <h3 className="items-center">CONTACT US</h3>
            </a>
            <p className="text-center lg:text-[20px] text-[17px] font-medium leading-9 text-white-a700 ">
              123 ABS Street, Uni 21, Bangladesh <br />
              +88 123456789 <br />
              Mon - Fri: 08:00 - 22:00 <br />
              Sat - Sun: 10:00 - 23:00 <br />
            </p>
          </div>
          {/* /// right */}
          <div className="flex flex-col items-start w-full py-24 bg-gray-900 gap-9 pl-[218px] pr-18">
            <div className="flex flex-col items-center gap-[26px]">
              <p className="text-[32px] font-medium text-white ">Follow US</p>
              <p className="text-[20px] font-medium text-white">
                Join us on social media
              </p>
            </div>
            <div className="mb-10 ml-[65px] flex w-[20%] justify-between gap-5 lg:w-full md:ml-0 md:w-full">
              <h3 className="h-[34px] w-[34px] text-white">
                <FaFacebookF />
              </h3>
              <h3 className=" h-[34px] w-[34px] text-white">
                <FaTwitter />
              </h3>
              <h3 className="h-[34px] w-[34px] text-white">
                <FaInstagram />
              </h3>
            </div>
          </div>
        </div>
        {/* /// footer bottom part */}
        <div className="flex justify-center py-[10px] bg-black">
          <div className="flex self-end justify-center px-2 container-xs md:px-3 lg:px-5">
            <p className="text-[12px] font-medium text-white lg:text-[17px]">
              Copyright © CulinaryCloud. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
