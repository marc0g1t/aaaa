import React from "react";
import Image from "next/image";
import { FiGithub } from "react-icons/fi";

import { FaFigma } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { IoCopyOutline } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";

export const Seven = () => {
  return (
    <div className="py-[96px] px-[342px] max-w-screen-xl mx-auto flex flex-col gap-[48px]">
      <div className="">
        <div className="px-[20px] py-[4px] bg-slate-200 rounded-xl w-fit mx-auto">
          Get in touch
        </div>
        <div className="text-[23px] mt-4 ">
          What’s next? Feel free to reach out to me if you're looking for a
          developer, have a query, or simply want to connect.
        </div>
      </div>
      <div className=" flex flex-col items-center gap-3">
        <div className="flex items-center gap-3">
          <CiMail className="w-[32px] h-[32px]" />
          <div className="text-[38px]">reachsagarshah@gmail.com</div>
          <IoCopyOutline className="w-[32px] h-[32px]" />
        </div>
        <div className="flex items-center gap-3">
          <FaPhoneAlt className="w-[32px] h-[32px]" />
          <div className="text-[38px]">+91 8980500565</div>
          <IoCopyOutline className="w-[32px] h-[32px]" />
        </div>
      </div>
      <div className=" flex flex-col items-center gap-3">
        <div>You may also find me on these platforms!</div>
        <div className="flex gap-5">
          <FiGithub className="w-[24px] h-[24px]" />
          <FaTwitter className="w-[24px] h-[24px]" />
          <FaFigma className="w-[24px] h-[24px]" />
        </div>
      </div>
    </div>
  );
};
