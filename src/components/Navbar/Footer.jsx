import React from "react";
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="flex ">
      <div className="w-full text-white font-inter">
        {/* /// footer left and right side */}
        <div className="flex">
          {/* /// left side */}
          <div className=" bg-[#1F2937] py-24 items-center text-center w-full gap-6 bg-blue_gray-900">
            <Link className="mb-[24px]  lg:text-[32px] md:mr-0 md:text-[26px] sm:text-[24px]">
              CONTACT US
            </Link>
            <p className="text-center text-[17px] font-medium leading-9 text-white-a700 ">
              123 ABS Street, Uni 21, Bangladesh <br />
              +88 123456789 <br />
              Mon - Fri: 08:00 - 22:00 <br />
              Sat - Sun: 10:00 - 23:00 <br />
            </p>
          </div>
          {/* /// right */}
          <div className="flex flex-col w-full gap-0 bg-[#111827] ">
            <div className="flex items-center flex-col md:items-center sm:items-center  lg:items-center gap-[20px]">
              <h3 className=" mt-[97px] lg:text-[32px]  text-white ">
                Follow US
              </h3>
              <p className="text-[20px] ml-[5px] mb-[10px] font-medium text-white">
                Join us on social media
              </p>
            </div>
            <div className="mt-[32px] flex pt-[0px] justify-center  gap-8">
              <Link>
                <FaFacebookF className="text-white w-[35px] h-[35px]" />
              </Link>
              <Link>
                <FaTwitter className="text-white w-[35px] h-[35px]" />
              </Link>
              <Link>
                <FaInstagram className="text-white w-[35px] h-[35px]" />
              </Link>
            </div>
          </div>
        </div>

        {/* /// footer bottom part */}
        <div className="flex justify-center py-[10px] bg-[#151515]">
          <div className="flex self-end justify-center px-2 md:px-3 lg:px-5">
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
