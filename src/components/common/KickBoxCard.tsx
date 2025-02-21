import Image from "next/image";
import React from "react";
import Description from "./Description";
interface kickBoxCardProps {
  descriptionOne: string;
  descriptionTwo: string;
  heading: string;
  title: string;
  cardImage: string;
  titleClass: string;
}

const KickBoxCard = ({
  descriptionOne,
  descriptionTwo,
  heading,
  title,
  cardImage,
  titleClass,
}: kickBoxCardProps) => {
  return (
    <div className="max-w-[323px] flex justify-center gap-y-[39px] max-md:gap-y-7 items-center flex-col">
      <Image
        src={cardImage}
        width={227}
        height={92}
        alt="card-image"
        className="pointer-events-none max-md:max-w-[200px]"
      />
      <div className="w-full border border-solid rounded-[28px] max-md:rounded-2xl border-black pt-[18px] pb-[19px] px-[26px]">
        <h4
          className={`text-[21px] leading-[100%] max-lg:text-xl pb-1 max-md:text-lg max-sm:text-base font-semibold ${titleClass}`}
        >
          {title}
        </h4>
        <h3 className="text-blacklight pb-[11px] text-[35px] leading-[44px] max-lg:leading-[36px] max-md:leading-[32px] max-sm:leading-[28px] max-lg:text-3xl max-md:text-2xl max-sm:xl font-semibold">
          {heading}
        </h3>
        <Description myClass="max-w-[277px] mx-auto" text={descriptionOne} />
        <Description
          myClass="pt-[27px] max-w-[270px] mx-auto"
          text={descriptionTwo}
        />
      </div>
    </div>
  );
};

export default KickBoxCard;
