import React from "react";

const Container = ({ children }) => {
  return (
    <div className="2xl:container xl:container lg:container md:container sm:container container mx-auto px-5">
      {children}
    </div>
  );
};

export default Container;
