import React from "react";
import Container from "../../Utils/Container";
import ShopItem from "./ShopItem";

const Shop = () => {
  return (
    <section>
      <Container>
        <div className="flex gap-[57px] justify-center mb-[48px] ">
          <h2 className="text-[24px] font-medium text-[#151515] leading-[29.05px] uppercase ">
            Salad
          </h2>
          <h2 className="text-[24px] font-medium text-[#151515] leading-[29.05px] uppercase ">
            Salad
          </h2>
          <h2 className="text-[24px] font-medium text-[#151515] leading-[29.05px] uppercase ">
            Salad
          </h2>
          <h2 className="text-[24px] font-medium text-[#151515] leading-[29.05px] uppercase ">
            Salad
          </h2>
        </div>
        <div className="flex justify-between">
          <div className="w-[48%] lg:w-[32%]">
            <ShopItem title=" Caeser Salad" image="../public/images/shopimage.png" />
          </div>
          <div className="w-[48%] lg:w-[32%]">
            <ShopItem title=" Caeser Salad" image="../public/images/shopimage.png" />
          </div>
          <div className="w-[48%] lg:w-[32%]">
            <ShopItem title=" Caeser Salad" image="../public/images/shopimage.png" />
          </div>
        </div>

        <div className="flex justify-between mt-[24px]">
          <div className="w-[48%] lg:w-[32%]">
            <ShopItem title=" Caeser Salad" image="../public/images/shopimage.png" />
          </div>
          <div className="w-[48%] lg:w-[32%]">
            <ShopItem title=" Caeser Salad" image="../public/images/shopimage.png" />
          </div>
          <div className="w-[48%] lg:w-[32%]">
            <ShopItem title=" Caeser Salad" image="../public/images/shopimage.png" />
          </div>
        </div>

        <div className="flex justify-between mt-[24px]">
          <div className="w-[48%] lg:w-[32%]">
            <ShopItem title=" Caeser Salad" image="../public/images/shopimage.png" />
          </div>
          <div className="w-[48%] lg:w-[32%]">
            <ShopItem title=" Caeser Salad" image="../public/images/shopimage.png" />
          </div>
          <div className="w-[48%] lg:w-[32%]">
            <ShopItem title=" Caeser Salad" image="../public/images/shopimage.png" />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Shop;
