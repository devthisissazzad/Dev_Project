import React from "react";
import Container from "../../Utils/Container";

const Orderitem = ({ ordertitle, src }) => {
  return (
    <Container>
      <div className="lg:pb-5 lg:pt-16 md:pb-1 md:pt-8 relative justify-center">
        <div>
          <img
            src={src}
            className="lg:w-[328px] lg:h-[370px] md:h-[170px] md:w-[120px]"
          />
        </div>
        <div
          className=" absolute  sm:pl-4 2xl:px-32 lg:pl-10 md:pl-4 md:text-xl mt-[-50px] text-center text-3xl font-light
         text-white font-inter"
        >
          {ordertitle}
        </div>
      </div>
    </Container>
  );
};

export default Orderitem;
