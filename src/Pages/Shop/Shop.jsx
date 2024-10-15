import React, { useEffect, useState } from "react";

import ShopItem from "./ShopItem";
import Container from "../../Utils/Container/Container";
import axios from "axios";
import Pagination from "./Pagination";

const Shop = () => {
  let [cardData, setCartData] = useState([]);
  useEffect(() => {
    function cardfuntion() {
      axios
        .get("https://dummyjson.com/products")
        .then((data) => {
          console.log(data.data.products);
          setCartData(data.data.products);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    cardfuntion();
  }, []);
  return (
    <section>
      <Container>
        {/* ===========shop nav======================= */}
        <div className="flex gap-5  lg:gap-[57px] justify-center mb-6 lg:mb-[48px] ">
          <h2 className="text-sm lg:text-[24px] font-medium text-[#151515] leading-[29.05px] uppercase cursor-pointer ">
            Salad
          </h2>
          <h2 className="text-sm lg:text-[24px] font-medium text-[#151515] leading-[29.05px] uppercase cursor-pointer  ">
            pizza
          </h2>
          <h2 className="text-sm lg:text-[24px] font-medium text-[#151515] leading-[29.05px] uppercase cursor-pointer ">
            soups
          </h2>
          <h2 className="text-sm lg:text-[24px] font-medium text-[#151515] leading-[29.05px] uppercase  cursor-pointer">
            desserts
          </h2>
        </div>
        {/* ==============================nav end========================== */}

        <Pagination itemsPerPage={9} cardData={cardData} />
      </Container>
    </section>
  );
};

export default Shop;
