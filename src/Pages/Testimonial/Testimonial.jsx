import React from "react";
import Container from "../../Utils/Container/Container";

import SimpleSlider from "./slider";

const Testimonials = () => {
  return (
    <section>
      <Container>
        <div className="flex flex-col items-center justify-items-center py-12 relative sm:justify-items-center sm:items-center">
          <div className="flex justify-center items-center sm:justify-items-center sm:items-center md:justify-items-center md:items-center lg:justify-items-center lg:items-center xl:justify-items-center xl:items-center 2xl:justify-items-center 2xl:items-center">
            <h3 className="text-[20px] font-normal font-inter italic text-yellow1 mb-4 sm:text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px]">
              ---What Our Clients Say---
            </h3>
          </div>

          <div className="flex justify-center items-center position relative sm:justify-items-center md:justify-items-center lg:justify-items-center xl:justify-items-center 2xl:justify-items-center  ">
            <div className="absolute top-[-5px] left-[-70px]  h-1 w-[424px] sm:hidden md:hidden lg:hidden xl:block 2xl:block  bg-dark6"></div>
            <h2 className="text-[40px] font-normal font-inter text-dark1 my-5 sm:my-0 md:my-0 lg:my-5 xl:my-5 2xl:my-5 sm:text-[24px] md:text-[28px] lg:text-[32px] xl:text-[40px] 2xl:text-[40px]">
              TESTIMONIALS
            </h2>
            <div className="absolute bottom-0 left-[-70px] h-1 w-[424px] sm:hidden md:hidden lg:hidden xl:block 2xl:block bg-dark6"></div>
          </div>

          <div>
            <SimpleSlider />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Testimonials;
