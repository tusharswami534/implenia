import Image from "next/image";
import React from "react";
import Header from "../common/Header";

const Hero = () => {
  return (
    <div className=" bg-cover bg-right bg-hero-mobile bg-no-repeat bg-hero">
      <Header />
      <div
        id="hero"
        className="flex justify-center items-center min-h-[662px] max-sm:min-h-[600px] relative max-xl:px-5 max-lg:after:absolute max-lg:after:left-0 max-lg:after:top-0 max-lg:after:w-full max-lg:after:h-full max-lg:after:bg-black/40"
      >
        <Image
          src={"/assets/images/webp/hero-image.webp"}
          alt="hero-image"
          width={375}
          height={562}
          className="absolute z-10 pointer-events-none hero-image top-[61%] max-xl:top-[32%] max-xl:max-w-[250px] max-xl:max-h-[400px] -translate-y-1/2 left-0"
        />
        <div className="container relative z-10 max-lg:justify-center max-lg:items-center max-lg:flex max-lg:flex-col max-w-[1138px]">
          <p className="font-bold text-[21px] pb-4 max-md:pb-2 relative max-lg:text-center text-white leading-[100%] text-shadow ">
            Shape the future of Implenia!
          </p>
          <h1 className="font-bold text-[76px] max-lg:text-center max-lg:mx-auto leading-[80px] max-lg:text-7xl max-md:text-6xl max-sm:text-5xl max-lg:leading-[76px] max-md:leading-[64px] max-sm:leading-[52px] relative max-w-[600px] text-shadow text-white">
            WE ARE LOOKING FOR YOUR IDEA
          </h1>
          <button className="py-[11px] whitespace-nowrap px-[22px] max-lg:mx-auto max-lg:text-xl max-md:text-lg max-sm:text-base max-lg:leading-[18px] max-md:leading-[16px] max-sm:leading-[14px] max-sm:max-w-[200px] max-lg:min-h-[55px] max-md:min-h-[45px] rounded-[47px] border-2 hover:shadow-heroShadow hover:text-blackLight font-bold transition-all duration-300 mt-[25px] border-white border-solid text-white text-[21px] leading-[21px] max-w-[312px] min-h-[67px] w-full">
            Bring your idea to life!
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
