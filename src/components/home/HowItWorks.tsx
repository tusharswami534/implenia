"use client";
import React, { useState } from "react";
import Heading from "../common/Heading";

const HowItWorks = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="bg-gray pt-[128px] pb-[144px] max-lg:py-28 max-md:py-20 max-sm:py-16 flex justify-center items-center px-5">
      <div className="container max-w-[1118px] ">
        <Heading myClass="mb-16 max-lg:pb-12 max-md:pb-10 max-sm:pb-8" text="HOW IT WORKS" />
        <div
          onClick={() => setShow(!show)}
          className="max-w-[1064px] max-h-[580px] h-full mx-auto rounded-[25px] relative overflow-hidden"
        >
          <div
            className={`w-[34.96%] h-[24.83%] bg-yellow absolute top-6 left-[29px] ${
              show ? "hidden" : ""
            }`}
          ></div>
          <iframe
            width="100%"
            height="580"
            className="max-xl:h-full"
            src="https://www.youtube.com/embed/N7ZmPYaXoic?si=t-tFv7KIi1vcVPOi"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
