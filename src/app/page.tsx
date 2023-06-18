"use client";

import { useEffect } from "react";
import { toast } from "sonner";
import Hero from "~/components/Hero";
import KeyCap from "~/components/Keyboard/KeyCap";
import { state as mstate } from "~/components/Modal/state";
import Projects from "~/components/Projects";
import keys from "~/lib/keys";

const t = () =>
  toast(
    <div className="flex gap-1">
      Press{" "}
      <div className="flex h-[20px] w-[20px] items-center justify-center rounded-md border border-black border-opacity-10 bg-black bg-opacity-50 text-white">
        F1
      </div>{" "}
      at any time to contact me.
    </div>
  );

export default function Root() {
  const { active, s: set } = mstate();
  useEffect(() => {
    t();
    const unsubscribe = keys(window);
    return () => {
      unsubscribe();
    };
  }, []);
  return (
    <div
      className={`mx-[5rem] mobile:mx-0 bounce ${active ? "cursor-pointer blur-[5px]" : ""}`}
      onClick={() => {
        if (active) {
          set(false);
        }
      }}
    >
      <div className={`${active ? "pointer-events-none" : "pointer-events-auto"}`}>
        <Hero />
        <div className="mt-10">
          <h1 className="mb-2 text-xl font-bold">Projects</h1>
          <Projects />
        </div>
      </div>
    </div>
  );
}
