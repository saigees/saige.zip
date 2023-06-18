"use client";

import { DISCORD, EMAIL, GITHUB, TWITTER } from "~/lib/vars";
import Socials from "./Socials/";
import { modal } from "./Modal";

export default function Hero() {
  return (
    <div className="mt-[10rem] relative flex items-center w-[100%]">
      <div className="w-[50%] small:w-[100%]">
        <h1 className="mb-2 text-3xl font-bold">Hey, i'm Saige 👋</h1>
        <p className="mb-3 max-w-[450px]">
          Welcome! I <a href="">design interfaces</a> and{" "}
          <a href="">create innovative software.</a> You can find a collection
          of my projects or see projects i find intresting on my <a href={GITHUB}>github.</a>
        </p>

        <p className="max-w-[450px] mb-2">
          You can contact me through my <a className="cursor-pointer" onClick={() => modal(true)}>email</a> or various social
          media platforms, such as:{" "}
          <a href={TWITTER}>twitter</a>,{" "}
          <a href={DISCORD}>discord</a>
        </p>
        <Socials/>
      </div>
      <div className="small:hidden absolute left-[30%] right-0 top-[-50%] bottom-[100%] bg-gradient-to-br from-yellow-500 via-purple-500 to-pink-500 h-[500px] rotate-45 w-[450px] blur-3xl rounded-full z-[-1]"></div>
    </div>
  );
}
