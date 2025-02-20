"use client";
import { FAQ_LIST } from "@/utils/helper";
import React, { useState } from "react";
import Heading from "../common/Heading";
import Description from "../common/Description";

const Faqs = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index: any) => {
    setOpenIndex(openIndex === index ? false : index);
  };
  return (
    <div className="bg-gray pt-[128px] pb-[146px]">
      <div className="max-w-[1090px] container mx-auto">
        <Heading myClass="pb-[9px]" text="FAQs" />
        {FAQ_LIST.map((data, index: number) => (
          <div
            key={index}
            className="overflow-hidden min-h-[45px] border-b-[1px] border-solid border-darkGray"
          >
            <button
              onClick={() => toggleAccordion(index)}
              className="text-[21px] font-semibold leading-[21px] max-lg:text-xl max-md:text-lg max-sm:text-base max-lg:leading-[18px] max-md:leading-[16px] max-sm:leading-[14px] text-blackLight flex justify-between items-center w-full py-2"
            >
              {data.title}
              {/* <img
              width={"30px"}
              className={`${
                openIndex === i
                  ? "rotate-180 transition-all duration-300"
                  : "rotate-0 transition-all duration-300"
              }`}
              src={UpArrow}
              alt="uparrow"
            /> */}
            </button>
            <div
              className={`${
                openIndex === index ? "max-h-20 pb-3.5" : "max-h-0"
              } transition-all duration-500 overflow-hidden`}
            >
              <Description text={data.description} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faqs;
