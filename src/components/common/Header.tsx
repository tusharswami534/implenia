"use client";
import { HEADER_LIST } from "@/utils/helper";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-white py-[18.5px] max-xl:px-5 w-full flex justify-center items-center">
      <div className="container max-w-[1177px] flex justify-between items-center">
        <Link href="/">
          <Image
            src="/assets/images/png/page-logo.png"
            alt="logo"
            width={93}
            height={93}
            className="max-md:size-20 max-sm:size-16"
          />
        </Link>
        <div
          className={`flex justify-center gap-[38px] max-sm:gap-7 max-sm:z-40 items-center max-sm:fixed max-sm:top-0 max-sm:bg-white max-sm:!w-full max-sm:!h-full max-sm:justify-center max-sm:items-center max-sm:flex-col transition-all duration-300 ${
            open ? "right-0" : "-right-full "
          }`}
        >
          {HEADER_LIST.map((item, index) => (
            <Link
              onClick={() => setOpen(false)}
              key={index}
              href={item.link}
              className="text-base transition-all duration-300 tracking-[0.28px] max-sm:text-lg hover:text-orange font-bold leading-[20.11px] "
            >
              {item.title}
            </Link>
          ))}
        </div>
        <button
          onClick={() => setOpen(!open)}
          className="overflow-hidden relative z-50 lg:hidden size-6 flex flex-col justify-between items-center"
        >
          <span
            className={`bg-black rounded-md w-6 h-0.5 block transition-all duration-300 ${
              open && "translate-x-10"
            }`}
          ></span>
          <span
            className={`bg-black rounded-md after:rounded-lg w-6 h-0.5 block relative after:bg-black after:absolute after:top-0 after:left-0 after:w-full after:h-0.5 after:transition-all after:duration-300 transition-all duration-300 ${
              open && "rotate-45 after:rotate-90"
            }`}
          ></span>
          <span
            className={`bg-black rounded-md w-6 h-0.5 block transition-all duration-300 ${
              open && "-translate-x-10"
            }`}
          ></span>
        </button>
      </div>
    </div>
  );
};

export default Header;
