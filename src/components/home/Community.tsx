import React from "react";
import Heading from "../common/Heading";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { COMMUNITY_LIST } from "@/utils/helper";

const Community = () => {
  return (
    <div className="bg-gray pt-[129px] pb-[130px] max-lg:py-28 max-md:py-20 max-sm:py-16 px-5">
      <div className="container max-w-[1108px] mx-auto">
        <Heading text="WHAT OUR COMMUNITY SAYS" />
        <div>
          <Swiper
            className="mySwiper"
            modules={[Navigation]}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
          >
            {COMMUNITY_LIST.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="max-w-[795px] flex justify-center items-center mx-auto">
                  <h3 className="text-center font-semibold leading-[40.22px] text-[32px] max-lg:text-3xl max-md:text-2xl max-sm:text-xl max-lg:leading-9 max-md:leading-7 max-sm:leading-6">
                    {item.heading}
                  </h3>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Community;
