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
          className=" relative h-[700px]  w-full object-contain"
          src={MenuBanner}
          alt=""
        />
        <div className="  ">
          <div>
            <Container>
              <div className="bg-dark2 h-[300px] xl:h-[330px] w-auto xl:w-[946px]     opacity-70 mx-auto mt-44 rounded-[2px] absolute top-0 left-[50%] translate-x-[-50%] ">
                <div className=" mx-auto  w-[850px]  py-[100px] ">
                  <h4 className="text-center text-[38px] lg:text-[45px] text-white font-semibold font-cinzel">
                    DESSERTS
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
