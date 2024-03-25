import React from "react";
import Image from "next/image";
export const Fourth = () => {
  return (
    <div className="max-w-screen-xl border py-[96px] mx-auto bg-slate-50">
      <div className="px-[20px] py-[4px] bg-slate-200 text-slate-600 rounded-xl w-[115px] mx-auto">
        Experience
      </div>
      <div className="text-slate-600 flex justify-center pt-4 text-[25px]">
        Here is a quick summary of my most recent experiences:
      </div>
      <div className="flex py-[32px] px-[32px] mt-[48px] w-[896px] justify-center gap-[48px] mx-auto bg-white">
        <div className="w-[206px]">
          <Image src="/upwork.png" width={102} height={28} />
        </div>
        <div className="w-[384px]">
          <div>Sr. Frontend Developer</div>
          <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>
          <div>Ut pretium arcu et massa semper, id fringilla leo semper.</div>
          <div>Sed quis justo ac magna.</div>
          <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
        </div>
        <div className="w-[146px]">Nov 2021 - Present</div>
      </div>
      <div className="flex py-[32px] mt-[48px] px-[32px] w-[896px] justify-center gap-[48px] mx-auto bg-white">
        <div className="w-[206px]">
          <Image src="/upwork.png" width={102} height={28} />
        </div>
        <div className="w-[384px]">
          <div>Team Lead</div>
          <div>Sed quis justo ac magna.</div>
          <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
          <div>Sed quis justo ac magna.</div>
          <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
        </div>
        <div className="w-[146px]">Jul 2017 - Oct 2021</div>
      </div>
      <div className="flex py-[32px] mt-[48px] px-[32px] w-[896px] justify-center gap-[48px] mx-auto bg-white">
        <div className="w-[206px]">
          <Image src="/upwork.png" width={102} height={28} />
        </div>
        <div className="w-[384px]">
          <div>Full Stack Developer</div>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit.
          </div>
        </div>
        <div className="w-[161px] ">Dec 2015 - May 2017</div>
      </div>
    </div>
  );
};
