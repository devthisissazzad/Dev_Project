import React from "react";
import Container from "../../Utils/Container";
import Onlineorder from "../Onlineorder/onlineorder";

const Bistroboss = () => {
  return (
    <>
      <Container>
        <div>
          <Onlineorder />
        </div>
        <div className=" mx-28 pb-20  relative ">
          <div className="md:ml-0">
            <img src="../public/images/Bistroboss.png" />
          </div>
          <div className="mx-10">
            <div className="bg-white absolute top-[110px] mx-28 p-20 ">
              <h4 className="text-center font-medium text-4xl   pb-6 text-black font-inter">
                Bistro Boss
              </h4>
              <p className=" text-center text-neutral-700 text-base font-inter">
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
