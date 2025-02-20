import { KICKBOX_PROCESS_LIST } from "@/utils/helper";
import React from "react";
import KickBoxCard from "../common/KickBoxCard";
import Heading from "../common/Heading";
import Description from "../common/Description";

const KickBox = () => {
  return (
    <div className="pt-[129px] pb-[144px] max-lg:py-28 max-md:py-20 max-sm:py-16 px-5">
      <div className="container max-w-[1090px] mx-auto">
        <Heading
          myClass="pb-[17px] max-md:pb-2.5 max-sm:pb-2"
          text="KICKBOX PROCESS"
        />
        <Description
          myClass="pb-[75px] max-lg:pb-[40px] max-md:pb-[30px]"
          text="The Kickbox program at Implenia guides participants through three key phases to turn their ideas into impactful solutions: 1. RedBox for validation, 2. BlueBox for piloting, and 3. GoldBox for implementation. To progress through each phase, you’ll work to continuously optimize your idea and demonstrate its potential to internal Implenia sponsors."
        />
        <div className="flex justify-center flex-wrap max-w-[1072px] mx-auto items-center gap-[51px]">
          {KICKBOX_PROCESS_LIST.map((item, index) => (
            <KickBoxCard
              titleClass={item.titleClass}
              key={index}
              cardImage={item.image}
              title={item.title}
              heading={item.heading}
              descriptionOne={item.descriptionOne}
              descriptionTwo={item.descriptionTwo}
            />
          ))}
        </div>
        <button className="py-[11px] mt-11 max-lg:mt-8 max-md:mt-6 max-sm:mt-5 whitespace-nowrap px-[22px] min-[1440px]:relative max-lg:text-xl max-md:text-lg max-sm:text-base max-lg:leading-[18px] max-md:leading-[16px] max-sm:leading-[14px] max-lg:max-w-[200px] max-lg:min-h-[55px] max-md:min-h-[45px] rounded-[47px] border-2 hover:shadow-[270px_0px_0px_#FF132D_inset] hover:text-white transition-all duration-300 border-red border-solid text-red font-bold text-[21px] leading-[21px] max-w-[268px] min-h-[56px] w-full">
          Start your RedBox!
        </button>
      </div>
    </div>
  );
};

export default KickBox;
