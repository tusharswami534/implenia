import { FOOTER_LIST } from "@/utils/helper";
import Link from "next/link";
import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="bg-black pt-[138px] pb-[65px]">
      <div className="max-w-[1117px] flex container mx-auto justify-between">
        <div className="max-w-[456px] w-full flex justify-between">
          <div className="max-w-[289px]">
            <p className="font-black text-base text-white leading-[20.11px] tracking-[-0.22px]">
              Implenia Innovation Hub
            </p>
            <p className="leading-[20.11px] tracking-[-0.22px] text-white">
              Thurgauerstrasse 101A <br /> 8152 Glattpark (Opfikon)
            </p>
            <Link
              className="leading-[20.11px] tracking-[-0.22px] text-white"
              href={"mailto:innovation@implenia.com"}
            >
              innovation@implenia.com
            </Link>
            <p className="font-black mt-10 text-base text-white leading-[20.11px] tracking-[-0.22px]">
              Implenia Innovation Hub
            </p>
            <p className="leading-[20.11px] tracking-[-0.22px] text-white">
              This revised version is based on Adobe Kickbox which is licensed
              under the Creative Commons Attribution License.
            </p>
            <p className="leading-[20.11px] mt-10 tracking-[-0.22px] text-white">
              Data Protection I Imprint
            </p>
            <p className="leading-[12.57px] mt-[38px] text-xs tracking-[-0.22px] text-white">
              Copyright © {year} Imlenia. Alle Rechte vorbehalten.
            </p>
          </div>
          <div className="max-w-[77px] flex flex-col">
            <p className="font-black text-base mb-5 text-white leading-[20.11px] tracking-[-0.22px]">
              Sitemap
            </p>
            {FOOTER_LIST.map((item, index) => (
              <Link
                href={item.link}
                key={index}
                className="leading-[20.11px] tracking-[-0.22px] text-white"
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex flex-col">
          <p className="font-black text-base mb-[19px] text-white leading-[20.11px] tracking-[-0.22px]">
            Contact
          </p>
          <form className="w-[273px]">
            <div className="max-w-[189px]">
              <input
                type="email"
                required
                className="py-[17px] px-[19px] outline-none w-full bg-white"
                placeholder="Ihre E-Mail"
              />
            </div>
            <textarea
              required
              className="w-full resize-none mt-2 outline-none px-[15px] min-h-[121px] py-[18px] bg-white"
              placeholder="Ihre E-Mail"
            ></textarea>
            <div className="w-full justify-end flex">
              <button className="py-[9.5px] px-[21.5px] bg-red text-white font-bold text-sm">
                SENDEN
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Footer;
