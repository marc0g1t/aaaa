import React from "react";
import { IoIosSunny } from "react-icons/io";
import { CgDetailsMore } from "react-icons/cg";

export const Header = () => {
  return (
    <div className="max-w-screen-xl border mx-auto py-[16px]">
      <div className="flex items-center justify-between">
        <div className="text-[28px] font-bold">{"<SS/>"}</div>
        <div className="sm:flex gap-[24px] items-center hidden ">
          <div className="text-gray-600 ">About</div>
          <div className="text-gray-600 ">Work</div>
          <div className="text-gray-600 ">Testimonials</div>
          <div className="text-gray-600 ">Contact</div>
          <div className="text-gray-600 text-[24px] ">
            <IoIosSunny />
          </div>
          <div></div>
          <div className="text-white bg-black rounded-xl w-[120px] h-[35px] flex justify-center items-center">
            Download CV
          </div>
        </div>
      </div>
    </div>
  );
};
