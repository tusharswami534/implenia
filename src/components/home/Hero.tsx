import Image from "next/image";
import React from "react";
import Header from "../common/Header";

const Hero = () => {
  return (
    <div className=" bg-cover bg-right bg-hero-mobile bg-no-repeat bg-hero">
      <Header />
      <div className="flex justify-center items-center min-h-[662px] max-sm:min-h-[600px] relative max-xl:px-5">
        <Image
          src={"/assets/images/webp/hero-image.webp"}
          alt="hero-image"
          width={375}
          height={562}
          className="absolute hero-image top-[61%] max-xl:top-[32%] max-xl:max-w-[250px] max-xl:max-h-[400px] -translate-y-1/2 left-0"
        />
        <div className="container max-w-[1138px]">
          <p className="font-bold text-[21px] relative text-white leading-[100%] text-shadow ">
            Shape the future of Implenia!
          </p>
          <h1 className="font-bold text-[76px] leading-[80px] max-lg:text-7xl max-md:text-6xl max-sm:text-5xl max-lg:leading-[76px] max-md:leading-[64px] max-sm:leading-[52px] relative max-w-[600px] text-shadow text-white">
            WE ARE LOOKING FOR YOUR IDEA
          </h1>
          <button className="py-[11px] whitespace-nowrap px-[22px] min-[1440px]:relative max-lg:text-xl max-md:text-lg max-sm:text-base max-lg:leading-[18px] max-md:leading-[16px] max-sm:leading-[14px] max-lg:max-w-[200px] max-lg:min-h-[55px] max-md:min-h-[45px] rounded-[47px] border-2 hover:shadow-[320px_0px_0px_#FFF_inset] hover:text-blackLight font-bold transition-all duration-300 mt-[25px] border-white border-solid text-white text-[21px] leading-[21px] max-w-[312px] min-h-[67px] w-full">
            Bring your idea to life!
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
