import React from "react";
import Image from "next/image";
import { TiDelete } from "react-icons/ti";

import { IoIosSunny } from "react-icons/io";

export const Ninth = () => {
  return (
    <div className="border bg-white w-[320px]">
      <div className=" flex justify-between p-[16px]">
        <div className="text-[20px] font-semibold">{"<SS/>"}</div>
        <TiDelete className="w-[24px] h-[24px]" />
      </div>
      <hr />
      <div className="p-[16px] flex flex-col gap-4">
        <div className="">About</div>
        <div className="">Work</div>
        <div className="">Testimonials</div>
        <div className="">Contact</div>
      </div>
      <hr />
      <div className="p-[16px]">
        <div className="flex justify-between ">
          <div>Switch Theme</div>
          <div>
            <IoIosSunny className="w-[36] h-[36]" />
          </div>
        </div>
        <div className="px-[92px] py-[6px] bg-black rounded-2xl text-white mt-[16px]">
          Download CV
        </div>
      </div>
    </div>
  );
};
