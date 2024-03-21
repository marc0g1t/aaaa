import React from "react";
import Image from "next/image";

export const Third = () => {
  return (
    <div className="py-[96px] px-[32px] max-w-screen-xl border mx-auto">
      <div className="px-[20px] py-[4px] w-[75px] bg-gray-200 text-gray-600 mx-auto rounded-xl">
        Skills
      </div>
      <div className="text-gray-600 flex justify-center pt-4 pb-[48px]">
        The skills, tools and technologies I am really good at:
      </div>
      <div>
        <div className="flex justify-between ">
          <div>
            <Image src="/icon-javscript.svg" width={64} height={64} />
            <div>Javascript</div>
          </div>
          <div>
            <Image src="/type.svg" width={64} height={64} />
            <div>Typescript</div>
          </div>
          <div>
            <Image src="/Group.png" width={70} height={64} />
            <div>React</div>
          </div>
          <div>
            <Image src="/next.png" width={64} height={64} />
            <div>Next.js</div>
          </div>
          <div>
            <Image src="node.svg" width={64} height={64} />
            <div>Node.js</div>
          </div>
          <div>
            <Image src="express.svg" width={64} height={64} />
            <div>Express.js</div>
          </div>
          <div>
            <Image src="nest.svg" width={64} height={64} />
            <div>Nest.js</div>
          </div>
          <div>
            <Image src="socket.svg" width={64} height={64} />
            <div>Socket.io</div>
          </div>
        </div>
        <div className="flex justify-between mt-[48px]">
          <div className="">
            <Image src="post.svg" width={64} height={64} />
            <div>PostgreSQL</div>
          </div>
          <div className="">
            <Image src="cypress.svg" width={64} height={64} />
            <div>MongoDB</div>
          </div>
          <div className="">
            <Image src="sass.svg" width={64} height={64} />
            <div>Sass/Scss</div>
          </div>
          <div className="">
            <Image src="tail.svg" width={64} height={64} />
            <div>Tailwindcss</div>
          </div>
          <div className="">
            <Image src="type.svg" width={64} height={64} />
            <div>Figma</div>
          </div>
          <div className="">
            <Image src="cypress.svg" width={64} height={64} />
            <div>Cypress</div>
          </div>
          <div className="">
            <Image src="S.svg" width={64} height={64} />
            <div>Storybook</div>
          </div>
          <div className="">
            <Image src="git.svg" width={64} height={64} />
            <div className="flex justify-center">Git</div>
          </div>
        </div>
      </div>
    </div>
  );
};
