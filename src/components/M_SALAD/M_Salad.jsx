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
              <div className="bg-dark2 h-[330px] w-[1096px]   opacity-70 mx-auto mt-44 rounded-[2px]">
                <div className=" mx-auto w-[850px] py-[100px] ">
                  <h4 className="text-center text-[45px] text-white font-semibold font-cinzel">
                    SALADS
                  </h4>
                  <p className="w-[841px] text-center font-inter text-white font-medium mt-1">
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
