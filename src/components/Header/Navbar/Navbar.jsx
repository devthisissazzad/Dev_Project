import React, { useState } from "react";
import logo from "./../../../assets/Navbar_image/logo.png";
import { Link, NavLink } from "react-router-dom";
import { IoMdCart } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { IoIosArrowBack } from "react-icons/io";
const Navbar = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div className="fixed  left-0 top-0 z-40 w-full flex items-center justify-between py-2 sm:py-4 px-4 lg:px-14   bg-[#151515] bg-opacity-50">
      <Link to="/">
        <img src={logo} alt="logo" className=" w-28 lg:w-36" />
      </Link>
      <div className="flex gap-4">
        <ul className="hidden sm:flex lg:gap-8 gap-4  text-white text-[12px] lg:text-[16px] lg:font-bold">
          <NavLink to="/" className="flex flex-col items-center gap-1">
            <p>HOME</p>
          </NavLink>
          <NavLink to="/contact" className="flex flex-col items-center gap-1">
            <p>CONTACT US</p>
          </NavLink>
          <NavLink to="/dashbord" className="flex flex-col items-center gap-1">
            <p>DASHBOARD</p>
          </NavLink>
          <NavLink to="/menu" className="flex flex-col items-center gap-1">
            <p>OUR MENU</p>
          </NavLink>
          <NavLink to="/shop" className="flex flex-col items-center gap-1">
            <p>OUR SHOP</p>
          </NavLink>
        </ul>
        <Link className=" relative">
          <IoMdCart className="text-white text-[18px] lg:text-[26px]" />
          <p className=" absolute right-[-8px] bottom-[-5px] w-4 text-center leading-4 bg-white text-black font-bold aspect-square rounded-full text-[8px]">
            10
          </p>
        </Link>
        <div className="flex items-center gap-1">
          <Link className="hidden sm:block text-white text-[12px] lg:text-[16px]  lg:font-bold">
            SIGN OUT
          </Link>
          <FaUserCircle className="text-white text-[18px] lg:text-[25px]" />
        </div>
        <div>
          <IoMdMenu
            onClick={() => setVisible(true)}
            className="text-white text-[25px] sm:hidden block"
          />
        </div>
        {/* ************** sidebar menu********* */}
        <div
          className={` absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${
            visible ? "w-full h-screen bg-[#000]" : "w-0"
          }`}
        >
          <div className="flex flex-col text-white">
            <div
              onClick={() => setVisible(false)}
              className="flex cursor-pointer items-center gap-2 p-3"
            >
              <IoIosArrowBack className="text-white text-[25px]" /> <p>Back</p>
            </div>
            <NavLink onClick={()=>setVisible(false)} to='/' className='py-2 pl-6 border font-bold'>HOME</NavLink>
            <NavLink onClick={()=>setVisible(false)} to='/contact' className='py-2 pl-6 border font-bold'>CONTACT US</NavLink>
            <NavLink onClick={()=>setVisible(false)} to='/dashbord' className='py-2 pl-6 border font-bold'>DASHBOARD</NavLink>
            <NavLink onClick={()=>setVisible(false)} to='/menu' className='py-2 pl-6 border font-bold'>OUR MENU</NavLink>
            <NavLink onClick={()=>setVisible(false)} to='/shop' className='py-2 pl-6 border font-bold'>OUR SHOP</NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;



