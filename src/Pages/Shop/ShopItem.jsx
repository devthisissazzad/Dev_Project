import React from "react";

const ShopItem = ({title,image}) => {
  return (
    <div className="bg-[#F3F3F3] w-full text-center ">
      <h3 className="  text-red-300">
        <img className="w-full object-cover" src={image} alt="shopimage" />

        <h3 className="text-[18px] lg:text-[24px] font-semibold text-[#151515] mt-5 lg:mt-[32px] text-center ">
          {title}
        </h3>
        <h4 className="text-[12px] lg:text-base font-normal text-[#737373]  mt-2 leading-[26px]">
          Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.
        </h4>

        <div className="flex justify-center pb-5  lg:pb-10">
          <button className="text-[12px] lg:text-xl font-medium text-[#BB8506] uppercase px-4  lg:px-[30px] py-3  lg:py-5 border border-b-[3px] border-b-[#BB8506] rounded-[8px] bg-[#E8E8E8] hover:bg-[#111827] duration-300 mt-[24px] flex justify-center ">
            add to cart
          </button>
        </div>
      </h3>
    </div>
  );
};

export default ShopItem;
