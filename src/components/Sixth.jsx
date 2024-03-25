import React from "react";
import Image from "next/image";

export const Sixth = () => {
  return (
    <div className="max-w-screen-xl mx-auto py-[96px] px-[32px] bg-slate-50">
      <div className="px-[20px] py-[4px] w-[125px] rounded-2xl bg-slate-200 flex justify-center mx-auto">
        Testimonials
      </div>
      <div className="flex justify-center mt-4 pb-[48px] text-[20px]">
        Nice things people have said about me:
      </div>
      <div className="flex gap-[48px]">
        <div className="w-[373px] h-[428px] p-[48px] flex flex-col gap-[24px] bg-white rounded-lg">
          <div className="flex justify-center">
            <Image src="/avatar.png" width={64} height={64} />
          </div>
          <div>
            “Job well done! I am really impressed. He is very very good at what
            he does:) I would recommend Sagar and will rehire in the future for
            Frontend development.”
          </div>
          <div>
            <div className="text-[20px] font-medium">John Doe</div>
            <div>Founder - xyz.com</div>
          </div>
        </div>
        <div className="w-[373px] h-[428px] p-[48px] flex flex-col gap-[24px] bg-white rounded-lg">
          <div className="flex justify-center">
            <Image src="/avatar.png" width={64} height={64} />
          </div>
          <div>
            “Great guy, highly recommended for any COMPLEX front-end development
            job! His skills are top-notch and he will be an amazing addition to
            any team.”
          </div>
          <div>
            <div className="text-[20px] font-medium">John Doe</div>
            <div>Founder - xyz.com</div>
          </div>
        </div>
        <div className="w-[373px] h-[428px] p-[48px] flex flex-col gap-[24px] bg-white rounded-lg">
          <div className="flex justify-center">
            <Image src="/avatar.png" width={64} height={64} />
          </div>
          <div>
            “Sagar was extremely easy and pleasant to work with and he truly
            cares about the project being a success. Sagar has a high level of
            knowledge and was able to work on my MERN stack application without
            any issues.”
          </div>
          <div>
            <div className="text-[20px] font-medium">John Doe</div>
            <div>Freelancer</div>
          </div>
        </div>
      </div>
    </div>
  );
};
