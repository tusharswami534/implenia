import React from "react";
interface CustomButtonProps {
  text: string;
  myClass?: string;
}

const CustomButton = ({ text, myClass }: CustomButtonProps) => {
  return (
    <button
      className={`py-[11px] whitespace-nowrap px-[22px] min-[1440px]:relative max-lg:text-xl max-md:text-lg max-sm:text-base max-lg:leading-[18px] max-md:leading-[16px] max-sm:leading-[14px] max-sm:max-w-[200px] max-lg:min-h-[55px] max-md:min-h-[45px] rounded-[47px] border-2 hover:shadow-redShadow hover:text-white transition-all duration-300 border-red border-solid text-red font-bold text-[21px] leading-[21px] max-w-[268px] min-h-[56px] w-full ${myClass}`}
    >
      {text}
    </button>
  );
};

export default CustomButton;
