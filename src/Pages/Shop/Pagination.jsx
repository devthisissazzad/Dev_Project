import React, { useState } from "react";
import ReactDOM from "react-dom";
import ReactPaginate from "react-paginate";
import ShopItem from "./ShopItem";
import Container from "../../Utils/Container/Container";

const Pagination = ({ itemsPerPage, cardData }) => {
  const items = cardData;
  
  

  function Items({ currentItems }) {
    return (
    //   <Container>
        <div className="flex gap-x-6  flex-wrap gap-y-6 ">
          {currentItems &&
            currentItems.map((item) => (
                console.log(item),
                
              <div className="w-full lg:w-[32%]">
                <ShopItem
                  title={item.title}
                  image="../public/images/shopimage.png"
                />
              </div>
            ))}
        </div>
    //   </Container>
    );
  }

  const [itemOffset, setItemOffset] = useState("");

  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <>
      <Items currentItems={currentItems} />
      <ReactPaginate
        breakLabel="..."
        nextLabel=""
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel=""
        renderOnZeroPageCount={null}
        containerClassName="flex gap-2 lg:gap-4 mt-6 mb-3 "
        pageClassName=""
        pageLinkClassName="px-2 lg:py-2 lg:px-4 inline-block border border-secendary items-center"
        activeClassName="bg-[#111827]  text-[#BB8506]"
      />
    </>
  );
};

export default Pagination;
