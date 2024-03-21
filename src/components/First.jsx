import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";
import { RiTwitterLine } from "react-icons/ri";
import { FaFigma } from "react-icons/fa";
import Image from "next/image";

export const First = () => {
  return (
    <div className="max-w-screen-xl border mx-auto px-[32px] py-[96px] flex">
      <div className="pr-[200px] flex flex-col gap-[48px]">
        <div>
          <div className="text-[50px] text-gray-900 font-bold">
            Hi, I'm Sagar{" "}
          </div>
          <div className="text-grey-500">
            I'm a full stack developer (React.js & Node.js) with a focus on
            creating (and occasionally designing) exceptional digital
            experiences that are fast, accessible, visually appealing, and
            responsive. Even though I have been creating web applications for
            over 7 years, I still love it as if it was something new.
          </div>
        </div>
        <div>
          <div className="flex items-center gap-3">
            <div>
              <FaLocationDot />
            </div>
            <div>Ahmedabad, India</div>
          </div>
          <div className="flex items-center gap-3">
            <div className="border w-[12px] h-[12px] bg-green-400 rounded-[50px]"></div>
            <div className="">Available for new projects</div>
          </div>
        </div>
        <div className="flex gap-3">
          <FiGithub className="w-[24px] h-[24px]" />
          <RiTwitterLine className="w-[24px] h-[24px]" />
          <FaFigma className="w-[24px] h-[24px]" />
        </div>
      </div>
      <div className="relative w-[1000px] h-[360px]   ">
        <Image src="/Pic.png" width={280} height={320} />
        <div className="bg-gray-200 w-[280px] h-[320px] absolute bottom-0 -z-10 right-0"></div>
      </div>
    </div>
  );
};
