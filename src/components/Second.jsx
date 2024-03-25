import React from "react";
import Image from "next/image";
export const Second = () => {
  return (
    <div className=" max-w-screen-xl mx-auto py-[96px] px-[32px] ">
      <div className="px-[20px] py-[4px] w-[115px] h-[28px] rounded-xl bg-gray-200 mx-auto flex items-center text-gray-600">
        About me
      </div>
      <div className="pt-[48px] flex ">
        <div className=" w-[2240px] h-[520px] relative">
          <Image
            src="/glasses.png"
            width={400}
            height={480}
            className="absolute right-0"
          />
          <div className="w-[400px] h-[480px] bg-gray-200 absolute bottom-0 -z-10"></div>
        </div>
        <div className="pl-[160px]">
          <div className="text-[35px] font-medium">
            Curious about me? Here you have it:
          </div>
          <div className="flex flex-col gap-[16px]">
            <div>
              I'm a passionate, self-proclaimed designer who specializes in full
              stack development (React.js & Node.js). I am very enthusiastic
              about bringing the technical and visual aspects of digital
              products to life. User experience, pixel perfect design, and
              writing clear, readable, highly performant code matters to me.
            </div>
            <div>
              I began my journey as a web developer in 2015, and since then,
              I've continued to grow and evolve as a developer, taking on new
              challenges and learning the latest technologies along the way.
              Now, in my early thirties, 7 years after starting my web
              development journey, I'm building cutting-edge web applications
              using modern technologies such as Next.js, TypeScript, Nestjs,
              Tailwindcss, Supabase and much more.
            </div>
            <div>
              I am very much a progressive thinker and enjoy working on products
              end to end, from ideation all the way to development.
            </div>
            <div>
              When I'm not in full-on developer mode, you can find me hovering
              around on twitter or on indie hacker, witnessing the journey of
              early startups or enjoying some free time. You can follow me on
              Twitter where I share tech-related bites and build in public, or
              you can follow me on GitHub.
            </div>
            <div>Finally, some quick bits about me.</div>
            <div className="flex gap-[100px]">
              <div>
                <div>B.E. in Computer Engineering</div>
                <div className="pt-[15px]">Full time freelancer</div>
              </div>
              <div>
                <div>Avid learner</div>
                <div className="pt-[15px]">Aspiring indie hacker</div>
              </div>
            </div>
            <div>
              One last thing, I'm available for freelance work, so feel free to
              reach out and say hello! I promise I don't bite 😉
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
