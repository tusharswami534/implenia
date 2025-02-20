import { KICKBOX_PROCESS_LIST } from "@/utils/helper";
import React from "react";
import KickBoxCard from "../common/KickBoxCard";
import Heading from "../common/Heading";
import Description from "../common/Description";
import CustomButton from "../common/CustomButton";

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
        <div className="flex justify-center flex-wrap max-w-[1072px] mx-auto items-center gap-[51px] max-lg:gap-10">
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
        <CustomButton
          text="Start your RedBox!"
          myClass="mt-[39px] lg:ml-[39px] max-lg:mt-8 max-md:mt-6 max-sm:mt-5"
        />
      </div>
    </div>
  );
};

export default KickBox;
