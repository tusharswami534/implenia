import React from "react";
import Heading from "../common/Heading";
import { STORIES_LIST } from "@/utils/helper";
import Image from "next/image";
import CustomButton from "../common/CustomButton";

const Stories = () => {
  return (
    <div className="pt-[128px] pb-[144px] ax-lg:py-28 max-md:py-20 max-sm:py-16 px-5">
      <div className="container mx-auto max-w-[1091px]">
        <Heading
          myClass="pb-[25px] max-sm:pb-2 max-md-4"
          text="INTRAPRENEURSHIP STORIES"
        />
        <div className="max-w-[1071px] max-xl:gap-10 max-xl:justify-center flex-wrap ml-auto flex justify-between">
          {STORIES_LIST.map((item, index) => (
            <div
              key={index}
              className="border border-solid max-w-[323px] border-black relative rounded-[28px] max-md:rounded-2xl"
            >
              <div
                className={`max-w-[104px] w-full flex justify-center items-center min-h-[27px] rounded-[13.5px] absolute top-[27px] left-[23px] max-sm:top-4 max-sm:left-3 ${
                  index === 0 ? "bg-lightBlue" : "bg-orange"
                }`}
              >
                <p className="font-semibold text-white text-[21px] leading-[100%]">
                  {item.boxContent}
                </p>
              </div>
              <Image
                src={item.image}
                alt={item.title}
                width={325}
                height={207}
                className="rounded-[28px] max-md:rounded-2xl"
              />
              <h3 className="text-[35px] leading-[44px] tracking-[0.66px] max-lg:text-3xl max-md:text-2xl max-sm:text-xl max-lg:leading-[36px] max-md:leading-[32px] max-sm:leading-[28px] font-semibold text-blackLight pt-[49px] max-sm:py-8 max-sm:px-4 pb-[63.5px] pr-[17px] pl-[27.5px]">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
        <CustomButton text="More Stories" myClass="mt-[39px] ml-[39px]" />
      </div>
    </div>
  );
};

export default Stories;
