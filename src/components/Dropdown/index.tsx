"use client";
import { useState } from "react";
import { Icon } from "@iconify/react"


export type DropdownTabProps = {
  name: string;
  keybind?: string;
  href?: string;
  onClick?: () => void;
};
export type DropdownProps = {
  selector: string;
  tabs: DropdownTabProps[];
};

export default function Dropdown(props: DropdownProps) {
  const [active, setActive] = useState(false);
  return (
    <div className="relative">
      <div>
        <p
          onClick={() => {
            setActive(!active);
          }}
          className="flex items-center gap-[0.35rem] bounce cursor-pointer text-[14px]  text-black hover:text-purple-600"
        >
          {props.selector}
          <Icon icon={`heroicons:chevron-down-20-solid`} className={`bounce ${active ? "rotate-180" : "rotate-0"}`}/>
        </p>
      </div>
      <div
        className={`bounce absolute origin-top-left transform ${
          active
            ? "pointer-events-auto top-[120%] scale-[1] opacity-100"
            : "pointer-events-none top-[140%] scale-[0.97] opacity-0"
        } w-[200px] rounded-lg border border-black border-opacity-25 bg-black bg-opacity-0 p-1`}
      >
        {props.tabs.map((tab) => {
          return (
            <div
              key={Math.floor(Math.random() * 99999999)}
              onClick={() => {
                if(tab.href) {
                  window.location.href = tab.href
                } else if(tab.onClick) {
                  tab.onClick();
                }
                setActive(false);
              }}
              className="bounce flex cursor-pointer justify-between rounded-md bg-transparent p-2 hover:text-purple-600"
            >
              <p className="text-[14px]">{tab.name}</p>
              <p className="text-[14px]">{tab.keybind}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
