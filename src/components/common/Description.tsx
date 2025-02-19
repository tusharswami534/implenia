import React from "react";
interface descriptionProps {
  myClass?: string;
  text: string;
}

const Description = ({ myClass, text }: descriptionProps) => {
  return (
    <p
      className={`font-light text-[21px] leading-[27px] tracking-[-0.28px] max-lg:text-xl max-md:text-lg max-sm:text-base max-lg:leading-[24px] max-md:leading-[22px] max-sm:leading-[20px] text-blackLight ${myClass}`}
    >
      {text}
    </p>
  );
};

export default Description;
