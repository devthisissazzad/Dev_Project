import React from "react";

const Login = () => {
  return (
    <div className="bg-[url('./src/assets/LoginImages/login_background.jpg')] py-10">
      <div className="w-[1200px] shadow-[10px_10px_10px_10px_rgba(0,0,0,0.25)] flex justify-around  mx-auto">
        {/* ===================  Login Page side image  =======================*/}

        <div className="w-[548px]overflow-hidden flex items-center">
          <img
            className=" object-cover"
            src="./src/assets/LoginImages/login_img.png"
            alt="login_img"
          />
        </div>
        {/* ====================  Login Page Input Part  =======================*/}

        <div className="w-[436px] box-border me-10">
          <h3 className="font-inter font-bold text-[40px] text-center text-[#151515]">
            Login
          </h3>
          <form action="">
            {/* --------------Email Input------------------- */}

            <label
              className="block font-inter font-semibold text-xl mt-5"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="mt-4 ps-4 py-4 bg-white w-full rounded-md border-solid border-[#D0D0D0] font-inter font-normal text-base text-black"
              type="email"
              placeholder="Enter Your Email"
            />

            {/* --------------Password Input------------------- */}

            <label
              className="block font-inter font-semibold text-xl mt-4"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="mt-4 ps-4 py-4 bg-white w-full rounded-md border-solid border-[#D0D0D0] font-inter font-normal text-base text-black"
              type="password"
              placeholder="Type Your Password"
            />

            {/* --------------Captcha Input------------------- */}

            <input
              className="mt-7 ps-4 py-4 bg-white w-full rounded-md border-solid border-[#D0D0D0] font-inter font-normal text-base text-black"
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
              className="mt-6 ps-4 py-4 bg-white w-full rounded-md border-solid border-[#D0D0D0] font-inter font-normal text-base text-black"
              type="email"
              placeholder="Type Here"
            />
            <button
              type="button"
              class="w-full mt-7 text-white font-bold text-xl  bg-[#D1A054] opacity-70 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg px-5 py-2.5 me-2 mb-2"
            >
              Default
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
