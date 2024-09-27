import React from "react";
import logo from "./../../assets/Navbar  image/logo.png"
import { NavLink } from "react-router-dom";
import { IoMdCart } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
const Navbar = () => {
  return (
    <div className="fixed z-40 w-full flex items-center justify-between py-5 px-14  bg-[#151515] bg-opacity-50">
    <img src={logo} alt="logo" className="h-[50px] w-[36]"/>
   <div className="flex gap-4">

    <ul className="hidden sm:flex gap-8  text-white font-bold">
      <NavLink to='/' className='flex flex-col items-center gap-1'>
        <p>HOME</p>
      </NavLink>
      <NavLink to='' className='flex flex-col items-center gap-1'>
        <p>CONTACT US</p>
      </NavLink>
      <NavLink to='' className='flex flex-col items-center gap-1'>
        <p>DASHBOARD</p>
      </NavLink>
      <NavLink to='' className='flex flex-col items-center gap-1'>
        <p>OUR MENU</p>
      </NavLink>
      <NavLink to='' className='flex flex-col items-center gap-1'>
        <p>OUR SHOP</p>
      </NavLink>
    </ul>
  
    <IoMdCart className="text-white text-[30px]"/>
    <div className="flex items-center gap-2">

    <p className=" text-white font-bold">SIGN OUT</p>
    <FaUserCircle className="text-white text-[30px]" />
    </div>
   </div>
    </div>
  );
};

export default Navbar;
