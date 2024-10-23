import React from "react";
import Container from "../../Utils/Container";
import Orderitem from "./orderitem";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import salad from "./../../assets/Online_order img/salad.png";
import soups from "./../../assets/Online_order img/soups.png";
import pizza from "./../../assets/Online_order img/pizza.png";
import deserts from "./../../assets/Online_order img/deserts.png";
import Sliderbuttons from "../Sliderbuttons/sliderbuttons";
const Onlineorder = () => {
  return (
    <>
      <div>
        <Container>
          <div className="text-center w-[20%] pt-12 mx-auto">
            <div className="border-b-4 pb-3  text-[#D99904] text-lg ">
              <h1 className="font-italic">---From 11:00am to 10:00pm---</h1>
            </div>
            <h4 className="border-b-4 pt-7 pb-7 font-inter font-normal text-4xl">
              ORDER ONLINE
            </h4>
          </div>
          <Swiper spaceBetween={10} slidesPerView={4}>
            <div>
              <SwiperSlide>
                <Orderitem src={salad} ordertitle="SALADS" />
              </SwiperSlide>
              <SwiperSlide>
                <Orderitem src={soups} ordertitle="SOUPS" />
              </SwiperSlide>
              <SwiperSlide>
                <Orderitem src={pizza} ordertitle="PIZZA" />
              </SwiperSlide>
              <SwiperSlide>
                <Orderitem src={deserts} ordertitle="DESERTS" />
              </SwiperSlide>
            </div>
            <div>
              <SwiperSlide>
                <Orderitem src={salad} ordertitle="SALADS" />
              </SwiperSlide>
              <SwiperSlide>
                <Orderitem src={soups} ordertitle="SOUPS" />
              </SwiperSlide>
              <SwiperSlide>
                <Orderitem src={pizza} ordertitle="PIZZA" />
              </SwiperSlide>
              <SwiperSlide>
                <Orderitem src={deserts} ordertitle="DESERTS" />
              </SwiperSlide>
            </div>
            <div>
              <SwiperSlide>
                <Orderitem src={salad} ordertitle="SALADS" />
              </SwiperSlide>
              <SwiperSlide>
                <Orderitem src={soups} ordertitle="SOUPS" />
              </SwiperSlide>
              <SwiperSlide>
                <Orderitem src={pizza} ordertitle="PIZZA" />
              </SwiperSlide>
              <SwiperSlide>
                <Orderitem src={deserts} ordertitle="DESERTS" />
              </SwiperSlide>
            </div>

            <div>
              <SwiperSlide>
                <Orderitem src={salad} ordertitle="SALADS" />
              </SwiperSlide>
              <SwiperSlide>
                <Orderitem src={soups} ordertitle="SOUPS" />
              </SwiperSlide>
              <SwiperSlide>
                <Orderitem src={pizza} ordertitle="PIZZA" />
              </SwiperSlide>
              <SwiperSlide>
                <Orderitem src={deserts} ordertitle="DESERTS" />
              </SwiperSlide>
            </div>

            <div>
              <SwiperSlide>
                <Orderitem src={salad} ordertitle="SALADS" />
              </SwiperSlide>
              <SwiperSlide>
                <Orderitem src={soups} ordertitle="SOUPS" />
              </SwiperSlide>
              <SwiperSlide>
                <Orderitem src={pizza} ordertitle="PIZZA" />
              </SwiperSlide>
              <SwiperSlide>
                <Orderitem src={deserts} ordertitle="DESERTS" />
              </SwiperSlide>
            </div>

            <div>
              <SwiperSlide>
                <Orderitem src={salad} ordertitle="SALADS" />
              </SwiperSlide>
              <SwiperSlide>
                <Orderitem src={soups} ordertitle="SOUPS" />
              </SwiperSlide>
              <SwiperSlide>
                <Orderitem src={pizza} ordertitle="PIZZA" />
              </SwiperSlide>
              <SwiperSlide>
                <Orderitem src={deserts} ordertitle="DESERTS" />
              </SwiperSlide>
            </div>

            <div>
              <SwiperSlide>
                <Orderitem src={salad} ordertitle="SALADS" />
              </SwiperSlide>
              <SwiperSlide>
                <Orderitem src={soups} ordertitle="SOUPS" />
              </SwiperSlide>
              <SwiperSlide>
                <Orderitem src={pizza} ordertitle="PIZZA" />
              </SwiperSlide>
              <SwiperSlide>
                <Orderitem src={deserts} ordertitle="DESERTS" />
              </SwiperSlide>
            </div>

            <div>
              <SwiperSlide>
                <Orderitem src={salad} ordertitle="SALADS" />
              </SwiperSlide>
              <SwiperSlide>
                <Orderitem src={soups} ordertitle="SOUPS" />
              </SwiperSlide>
              <SwiperSlide>
                <Orderitem src={pizza} ordertitle="PIZZA" />
              </SwiperSlide>
              <SwiperSlide>
                <Orderitem src={deserts} ordertitle="DESERTS" />
              </SwiperSlide>
            </div>

            <div>
              <SwiperSlide>
                <Orderitem src={salad} ordertitle="SALADS" />
              </SwiperSlide>
              <SwiperSlide>
                <Orderitem src={soups} ordertitle="SOUPS" />
              </SwiperSlide>
              <SwiperSlide>
                <Orderitem src={pizza} ordertitle="PIZZA" />
              </SwiperSlide>
              <SwiperSlide>
                <Orderitem src={deserts} ordertitle="DESERTS" />
              </SwiperSlide>
            </div>

            <div>
              <SwiperSlide>
                <Orderitem src={salad} ordertitle="SALADS" />
              </SwiperSlide>
              <SwiperSlide>
                <Orderitem src={soups} ordertitle="SOUPS" />
              </SwiperSlide>
              <SwiperSlide>
                <Orderitem src={pizza} ordertitle="PIZZA" />
              </SwiperSlide>
              <SwiperSlide>
                <Orderitem src={deserts} ordertitle="DESERTS" />
              </SwiperSlide>
            </div>

            <div>
              <SwiperSlide>
                <Orderitem src={salad} ordertitle="SALADS" />
              </SwiperSlide>
              <SwiperSlide>
                <Orderitem src={soups} ordertitle="SOUPS" />
              </SwiperSlide>
              <SwiperSlide>
                <Orderitem src={pizza} ordertitle="PIZZA" />
              </SwiperSlide>
              <SwiperSlide>
                <Orderitem src={deserts} ordertitle="DESERTS" />
              </SwiperSlide>
            </div>

            <div>
              <SwiperSlide>
                <Orderitem src={salad} ordertitle="SALADS" />
              </SwiperSlide>
              <SwiperSlide>
                <Orderitem src={soups} ordertitle="SOUPS" />
              </SwiperSlide>
              <SwiperSlide>
                <Orderitem src={pizza} ordertitle="PIZZA" />
              </SwiperSlide>
              <SwiperSlide>
                <Orderitem src={deserts} ordertitle="DESERTS" />
              </SwiperSlide>
            </div>

            <SwiperSlide>
              <Orderitem src={salad} ordertitle="SALADS" />
            </SwiperSlide>
            <SwiperSlide>
              <Orderitem src={soups} ordertitle="SOUPS" />
            </SwiperSlide>
            <SwiperSlide>
              <Orderitem src={pizza} ordertitle="PIZZA" />
            </SwiperSlide>
            <SwiperSlide>
              <Orderitem src={deserts} ordertitle="DESERTS" />
            </SwiperSlide>
            <div className=" text-center pt-5 pb-10 ">
              <Sliderbuttons />
            </div>
          </Swiper>
        </Container>
      </div>
    </>
  );
};

export default Onlineorder;
