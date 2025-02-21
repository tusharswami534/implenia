"use client";
import React, { useState } from "react";
import Heading from "../common/Heading";
import Description from "../common/Description";
import { IMPLENIA_LIST } from "@/utils/helper";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import CustomButton from "../common/CustomButton";

const Implenia = () => {
  const [count, setCount] = useState(false);
  const { ref } = useInView({
    triggerOnce: true,
    onChange: (inView) => setCount(inView),
  });
  return (
    <div
      id="stories"
      className="pt-[134px] pb-[129px] max-lg:py-28 max-md:py-20 max-sm:py-16 px-5 flex justify-center items-center"
    >
      <div className="container max-w-[1090px]">
        <Heading myClass="mb-4 max-sm:mb-2" text="IMPLENIA KICKBOX" />
        <Description text="Since 2019, our Kickbox Intrapreneurship Program has been inspiring employees across all divisions to turn their ideas into impactful solutions. From validating ideas (RedBox) to piloting projects (BlueBox) and driving implementation (GoldBox), Kickbox provides the tools and support to shape the future of Implenia. Become an intrapreneur yourself and bring your idea to life!" />
        <div className="flex justify-between mt-[47px] max-lg:mt-11 max-md:mt-10 max-sm:mt-8 items-center max-lg:items-start max-lg:flex-col max-lg:gap-y-8">
          <div
            ref={ref}
            className="flex max-md:gap-6 max-md:flex-wrap max-md:items-center"
          >
            {IMPLENIA_LIST.map((item, index) => (
              <div
                key={index}
                className={`flex flex-col justify-center max-lg:justify-start items-center ${
                  index === 0 ? "md:mr-[71px]" : index === 1 && "md:mr-[54px]"
                }`}
              >
                <h3 className="text-[80px] max-lg:text-7xl max-md:text-6xl max-sm:text-5xl max-lg:leading-[92px] max-md:leading-[80px] max-sm:leading-[60px] leading-[100px] text-orangeLight tracking-[-0.66px]">
                  +
                  <CountUp
                    start={0}
                    end={count ? [155, 325, 250][index] || 0 : 0}
                    duration={3}
                  />
                </h3>
                <p className="font-bold text-[21px] leading-[100%] max-lg:text-xl max-md:text-lg max-sm:text-base text-center">
                  {item}
                </p>
              </div>
            ))}
          </div>
          <CustomButton text=" Submit your idea!" />
        </div>
      </div>
    </div>
  );
};

export default Implenia;
