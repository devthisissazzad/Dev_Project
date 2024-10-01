import React from "react";
import Container from "../../Utils/Container/Container";
import HomeFromOurMenu from "../../assets/HomeFromOurMenu/Rectangle 13.png";
import RightImage from "../../assets/HomeFromOurMenu/fromOurMenuRightImage.png";
import { Link } from "react-router-dom";
const H_FromOurMenu = () => {
  return (
    <div>
      <div className="  ">
        <img
          className=" relative h-screen sm:h-[580px] md:h-[700px] w-full"
          src={HomeFromOurMenu}
          alt=""
        />
        <div className=" absolute  inset-0">
          <div className="flex justify-center mb-1 lg:mb-5 mt-5 lg:mt-16">
            <h2 className="text-lg font-normal text-[#D99904] italic">
              ---Check it out---
            </h2>
          </div>
          <div>
            <div className="text-center mb-1">
              <h2 className="border-t border-gray-300 my-1 lg:my-2 w-1/3 inline-block mx-auto text-white"></h2>
              <h2 className="text-center text-[26px] lg:text-[36px] font-inter font-normal my-1 lg:my-4 text-white">
                FROM OUR MENU
              </h2>
              <h2 className="border-b border-gray-300 my-2 w-1/3 inline-block mx-auto text-white"></h2>
            </div>
            <Container>
              <div className="mt-0 lg:mt-5 w-full lg:w-[1200px]  flex flex-col md:flex-row  lg:mx-auto gap-0 lg:gap-8  xl:gap-20 ">
                <div className=" w-full lg:w-[40%] ">
                  <img
                    className=" h-[210px]  lg:h-[380px] w-full object-contain"
                    src={RightImage}
                    alt=""
                  />
                </div>
                <div className=" w-full lg:w-[40%] mt-2 lg:mt-[82px]">
                  <h3 className="text-inter text-[30px] lg:text-[24px] leading-[38px] lg:leading-[32px] font-semibold text-white mt-3 lg:mt-0">
                    March 20, 2023 WHERE CAN I GET SOME?
                  </h3>
                  <p className="text-inter  mt-1 mb-6 text-white">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Error voluptate facere, deserunt dolores maiores quod nobis
                    quas quasi. Eaque repellat recusandae ad laudantium tempore
                    consequatur consequuntur omnis ullam maxime tenetur.
                  </p>
                  <div>
                    <Link className="text-inter px-6 border border-1 text-white py-[10px] rounded-[3px] ">
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            </Container>
          </div>
        </div>
      </div>
    </div>
  );
};

export default H_FromOurMenu;
