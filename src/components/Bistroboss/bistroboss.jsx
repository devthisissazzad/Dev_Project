import React from "react";
import Onlineorder from "../Onlineorder/onlineorder";
import Container from "../../Utils/Container/Container";

const Bistroboss = () => {
  return (
    <>
      <Container>
        <div>
          <Onlineorder />
        </div>
        <div className=" mx-28 pb-32  relative ">
          <div className="sm:ml-[-110px] md:ml-[-98px] lg:ml-[-20px]  md:mr-[-116px] md:mb-[-48px]">
            <img src="../public/images/Bistroboss.png" />
          </div>
          <div className="mx-10  ">
            <div className="bg-white absolute sm:top-[50px] sm:ml-[-87px] sm:p-9 sm:mr-[-100px] md:ml-[-60px] md:mr-[-29px] md:top-[56px] md:p-7 lg:p-[60px] lg:top-[68px]   lg:ml-[20px] lg:mr-[-40px]  2xl:ml-16 2xl:top-24 2xl:mr-16 2xl:p-[120px] ">
              <h4 className="text-center font-medium sm:text-2xl md:text-2xl lg:text-3xl  2xl:text-4xl   pb-6 text-black font-inter">
                Bistro Boss
              </h4>
              <p className=" text-center text-neutral-700 sm:text-base 2xl:text-lg lg:text-base font-inter ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Necessitatibus, libero accusamus laborum deserunt ratione dolor
                officiis praesentium! Deserunt magni aperiam dolor eius dolore
                at, nihil iusto ducimus incidunt quibusdam nemo.
              </p>
              <p className=" text-center text-neutral-700 sm:text-base 2xl:text-lg lg:text-base font-inter ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Necessitatibus, libero accusamus laborum deserunt ratione dolor
                officiis praesentium! Deserunt magni aperiam dolor eius dolore
                at, nihil iusto ducimus incidunt quibusdam nemo.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Bistroboss;
