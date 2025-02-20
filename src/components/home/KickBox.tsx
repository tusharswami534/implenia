import { KICKBOX_PROCESS_LIST } from "@/utils/helper";
import React from "react";
import KickBoxCard from "../common/KickBoxCard";

const KickBox = () => {
  return (
    <div className="pt-[129px] pb-[144px] max-lg:py-28 max-md:py-20 max-sm:py-16">
      <div className="flex justify-center flex-wrap max-w-[1072px] container mx-auto items-center gap-[51px]">
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
    </div>
  );
};

export default KickBox;
