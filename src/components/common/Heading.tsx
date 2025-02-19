import React from "react";
interface HeadingProps {
  myClass?: string;
  text: string;
}

const Heading = ({ myClass, text }: HeadingProps) => {
  return (
    <h2
      className={`font-bold text-[49px] leading-[61.59px] tracking-[-0.66px] text-blackLight max-lg:text-5xl max-md:text-4xl max-sm:text-3xl max-lg:leading-[52px] max-md:leading-[40px] max-sm:leading-[36px] ${myClass}`}
    >
      {text}
    </h2>
  );    
};

export default Heading;
