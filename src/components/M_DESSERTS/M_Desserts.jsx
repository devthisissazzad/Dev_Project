import React from "react";
import Container from "../../Utils/Container/Container";
import MenuBanner from "../../assets/MenuBanners/MenuBenners.png";
import RightImage from "../../assets/HomeFromOurMenu/fromOurMenuRightImage.png";
import { Link } from "react-router-dom";
const M_Desserts = () => {
  return (
    <div>
      <div className="  ">
        <img
          className=" relative h-[700px] w-full object-contain"
          src={MenuBanner}
          alt=""
        />
        <div className=" absolute inset-0">
          <div>
            <Container>
              <div className="bg-dark2 h-[150px] sm:h-[220px] md:h-[250px] lg:h-[290px] xl:h-[330px] w-[500px] sm:px-4 sm:w-[600px] md:w-[760px] px-4 md:px-4 lg:w-[946px]  xl:w-[1096px]   opacity-70 mx-auto mt-[265px] sm:mt-[240px] xl:mt-44 rounded-[2px]">
                <div className=" mx-auto  xl:w-[850px] py-[30px] sm:py-[38px] md:py-[80px] xl:py-[100px] ">
                  <h4 className="text-center text-[38px] lg:text-[45px] text-white font-semibold font-cinzel">
                    PIZZA
                  </h4>
                  <p className="w-auto xl:w-[841px] text-center font-inter text-white font-medium text-[16px] mt-1">
                    Lorem Ipsum has been the industry’s standard dummy text ever
                    since the 1500s, when an unknown printer took a galley of
                    type and scrambled it to make a type specimen book.
                  </p>
                </div>
              </div>
            </Container>
          </div>
        </div>
      </div>
    </div>
  );
};

export default M_Desserts;
