import React from "react";
import Container from "../../Utils/Container";
import ShopItem from "./ShopItem";

const Shop = () => {
  return (
    <section>
      <Container>
        <div className="flex gap-5  lg:gap-[57px] justify-center mb-6 lg:mb-[48px] ">
          <h2 className="text-sm lg:text-[24px] font-medium text-[#151515] leading-[29.05px] uppercase ">
            Salad
          </h2>
          <h2 className="text-sm lg:text-[24px] font-medium text-[#151515] leading-[29.05px] uppercase ">
            pizza
          </h2>
          <h2 className="text-sm lg:text-[24px] font-medium text-[#151515] leading-[29.05px] uppercase ">
            soups
          </h2>
          <h2 className="text-sm lg:text-[24px] font-medium text-[#151515] leading-[29.05px] uppercase ">
            desserts
          </h2>
        </div>
        <div className="flex gap-3  lg:gap-6  flex-wrap gap-y-6">
          <div className="w-[48%] lg:w-[32%]">
            <ShopItem
              title=" Caeser Salad"
              image="../public/images/shopimage.png"
            />
          </div>
          <div className="w-[48%] lg:w-[32%]">
            <ShopItem
              title=" Caeser Salad"
              image="../public/images/shopimage.png"
            />
          </div>
          <div className="w-[48%] lg:w-[32%]">
            <ShopItem
              title=" Caeser Salad"
              image="../public/images/shopimage.png"
            />
          </div>
          <div className="w-[48%] lg:w-[32%]">
            <ShopItem
              title=" Caeser Salad"
              image="../public/images/shopimage.png"
            />
          </div>
          <div className="w-[48%] lg:w-[32%]">
            <ShopItem
              title=" Caeser Salad"
              image="../public/images/shopimage.png"
            />
          </div>
          <div className="w-[48%] lg:w-[32%]">
            <ShopItem
              title=" Caeser Salad"
              image="../public/images/shopimage.png"
            />
          </div>
          <div className="w-[48%] lg:w-[32%]">
            <ShopItem
              title=" Caeser Salad"
              image="../public/images/shopimage.png"
            />
          </div>
          <div className="w-[48%] lg:w-[32%]">
            <ShopItem
              title=" Caeser Salad"
              image="../public/images/shopimage.png"
            />
          </div>
        </div>
      
      </Container>
    </section>
  );
};

export default Shop;
