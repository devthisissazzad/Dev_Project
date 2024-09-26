import React from "react";
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="w-full text-white font-inter">
        <div className="flex bg-[#1F2937]">
          <div className="flex flex-col items-end justify-center w-full gap-6 py-24 bg-blue_gray-900 pl-14 pr-[150px]">
            <a className="mr-[68px] " href="#">
              <h3 className="items-center">CONTACT US</h3>
            </a>
            <p className="text-center text-[20px] font-medium leading-9 text-white-a700 ">
              123 ABS Street, Uni 21, Bangladesh <br />
              +88 123456789 <br />
              Mon - Fri: 08:00 - 22:00 <br />
              Sat - Sun: 10:00 - 23:00 <br />
            </p>
          </div>
          <div className="flex flex-col items-start w-full py-24 bg-gray-900 gap-9 pl-[218px] pr-18">
            <div className="flex flex-col items-center gap-[26px]">
              <p className="text-[32px] font-medium text-white ">Follow US</p>
              <p className="text-[20px] font-medium text-white">
                Join us on social media
              </p>
            </div>
            <div className="mb-10 ml-[26px] flex w-[20%] justify-between gap-5 ">
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
        <div className="flex justify-center py-[18px]">
          <div className="flex self-end justify-center container-xs px-14"></div>
        </div>
      </div>
      <p className="text-[20px] font-medium text-white ">
        Copyright © CulinaryCloud. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
