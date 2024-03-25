import { IoIosSunny } from "react-icons/io";
import { IoMenu } from "react-icons/io5";
import { Ninth } from "./Ninth";
import { useState } from "react";
export const Header = () => {
  const [goku, setGoku] = useState(false);
  const gohan = () => {
    setGoku(!goku);
  };
  return (
    <div className="max-w-screen-xl mx-auto py-[16px] px-[32px] relative w-screen">
      <div className="flex items-center justify-between">
        <div className="text-[28px] font-bold">{"<SS/>"}</div>
        <div className="hidden gap-[24px] items-center  md:flex">
          <div className="text-gray-600 ">About</div>
          <div className="text-gray-600 ">Work</div>
          <div className="text-gray-600 ">Testimonials</div>
          <div className="text-gray-600 ">Contact</div>
          <div className="text-gray-600 text-[24px] ">
            <IoIosSunny />
          </div>

          <div className="text-white bg-black rounded-xl w-[120px] h-[35px] flex justify-center items-center">
            Download CV
          </div>
        </div>
        <IoMenu onClick={gohan} className="md:hidden flex" />
      </div>
      {goku && <Ninth />}
    </div>
  );
};
