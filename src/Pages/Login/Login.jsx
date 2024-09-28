import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Login = () => {
  return (
    <div className="bg-[url('./src/assets/LoginImages/login_background.jpg')]  w-full min-h-screen h-full px-3 py-4 md:py-0 flex justify-around items-center">
      {/* ===================  Login Page side image  =======================*/}

      <div className="lg:w-[548px] overflow-hidden md:flex items-center min-[375px]:hidden ">
        <img
          className=" object-cover"
          src="./src/assets/LoginImages/login_img.png"
          alt="login_img"
        />
      </div>
      {/* ====================  Login Page Input Part  =======================*/}

      <div className="lg:w-[436px] box-border ">
        <h3 className="  font-inter font-bold text-[40px] text-center text-[#151515]">
          Login
        </h3>

        <form action="">
          {/* --------------Email Input------------------- */}

          <label
            className="block font-inter font-semibold text-xl "
            htmlFor="email"
          >
            Email
          </label>
          <input
            className=" ps-4 py-4 bg-white w-full rounded-md border-solid border-[#D0D0D0] font-inter font-normal text-base text-black"
            type="email"
            placeholder="Enter Your Email"
          />

          {/* --------------Password Input------------------- */}

          <label
            className="block font-inter font-semibold text-xl mt-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="mt-0 ps-4 p-4 bg-white w-full rounded-md border-solid border-[#D0D0D0] font-inter font-normal text-base text-black"
            type="password"
            placeholder="Type Your Password"
          />

          {/* --------------Captcha Input------------------- */}

          <input
            className="mt-5 ps-4 py-4 bg-white w-full rounded-md border-solid border-[#D0D0D0] font-inter font-normal text-base text-black"
            type="email"
            placeholder="auto generated captcha"
          />
          <a
            className="inline-block mt-2 font-inter font-semibold text-xl text-[#5D5FEF]"
            href="#"
          >
            Reload Captcha
          </a>
          <input
            className="mt-4 ps-4 py-4 bg-white w-full rounded-md border-solid border-[#D0D0D0] font-inter font-normal text-base text-black"
            type="email"
            placeholder="Type Here"
          />
          {/* ------------------Sign In Button--------------------- */}
          <button
            type="button"
            class="w-full mt-4 text-white font-bold text-xl  bg-[#D1A054] opacity-70 hover:bg-[#faaf3d] focus:ring-4 focus:ring-blue-300 rounded-lg px-5 py-3.5 me-2 mb-2"
          >
            Sign In
          </button>
        </form>

        {/* -----------Create Account Option----------- */}

        <p className=" font-inter font-medium text-xl text-[#D1A054] text-center">
          New here?
          <Link className="font-bold hover:text-[#faaf3d]">
            Create a New Account
          </Link>{" "}
        </p>
        <p className="mb-2 font-inter font-medium text-xl text-[#444444] text-center">
          Or sign in with
        </p>

        {/* ----------Login with Facebook/Google/Github--------- */}
        <div className="flex gap-14 items-center justify-center ">
          <Link className="w-[52px] h-[52px] rounded-[50%] border-2 border-[#444444] flex items-center justify-center text-2xl">
            <FaFacebookF />
          </Link>
          <Link className="w-[52px] h-[52px] rounded-[50%] border-2 border-[#444444] flex items-center justify-center text-2xl">
            <FaGoogle />
          </Link>
          <Link className="w-[52px] h-[52px] rounded-[50%] border-2 border-[#444444] flex items-center justify-center text-2xl">
            <FaGithub />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
