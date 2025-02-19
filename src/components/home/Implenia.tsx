import React from "react";
import Heading from "../common/Heading";
import Description from "../common/Description";
import { IMPLENIA_LIST } from "@/utils/helper";

const Implenia = () => {
  return (
    <div className="pt-[134px] pb-[129px] max-lg:py-28 max-md:py-20 max-sm:py-16 px-5 flex justify-center items-center">
      <div className="container max-w-[1090px]">
        <Heading myClass="mb-4 max-sm:mb-2" text="IMPLENIA KICKBOX" />
        <Description text="Since 2019, our Kickbox Intrapreneurship Program has been inspiring employees across all divisions to turn their ideas into impactful solutions. From validating ideas (RedBox) to piloting projects (BlueBox) and driving implementation (GoldBox), Kickbox provides the tools and support to shape the future of Implenia. Become an intrapreneur yourself and bring your idea to life!" />
        <div className="flex justify-between mt-[47px] max-lg:mt-11 max-md:mt-10 max-sm:mt-8 items-center max-lg:flex-col max-lg:gap-y-10">
          <div className="flex max-md:gap-6 max-md:flex-wrap max-md:justify-center max-md:items-center">
            {IMPLENIA_LIST.map((item, index) => (
              <div
                key={index}
                className={`flex flex-col justify-center items-center ${
                  index === 0 ? "md:mr-[71px]" : index === 1 && "md:mr-[54px]"
                }`}
              >
                <h3 className="text-[80px] leading-[100px] text-orangeLight tracking-[-0.66px]">
                  +{item.number}
                </h3>
                <p className="font-bold text-[21px] leading-[100%] max-lg:text-xl max-md:text-lg max-sm:text-base text-center">
                  {item.title}
                </p>
              </div>
            ))}
          </div>
          <button className="py-[11px] whitespace-nowrap px-[22px] min-[1440px]:relative max-lg:text-xl max-md:text-lg max-sm:text-base max-lg:leading-[18px] max-md:leading-[16px] max-sm:leading-[14px] max-lg:max-w-[200px]  max-lg:min-h-[55px] max-md:min-h-[45px]  rounded-[47px] border-2 hover:scale-105 transition-all duration-300 border-red border-solid text-red font-bold text-[21px] leading-[21px] max-w-[268px] min-h-[56px] w-full">
            Submit your idea!
          </button>
        </div>
      </div>
    </div>
  );
};

export default Implenia;
