import React from "react";
import Container from "../../Utils/Container";

const Orderitem = ({ ordertitle, src }) => {
  return (
    <Container>
      <div className="pb-5 pt-24 relative justify-center">
        <div>
          <img src={src} className="w-[328px] h-[370px]" />
        </div>
        <div
          className=" absolute px-32 mt-[-50px] text-3xl font-light
         text-white font-inter"
        >
          {ordertitle}
        </div>
      </div>
    </Container>
  );
};

export default Orderitem;
