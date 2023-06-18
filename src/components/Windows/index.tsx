import { useState } from "react";
import designs from "./data";

export default function DesignWindows() {
  const [windows] = useState(designs)
  return (
    <div className="flex flex-wrap gap-1">
      {windows.map((design) => {
        return (
          <div
            onClick={() => (window.location.href = design.url)}
            key={Math.floor(Math.random() * 99999999)}
            className="bounce h-[6.5rem] w-[30%] scale-[1] cursor-pointer overflow-hidden rounded-lg border border-white border-opacity-40 bg-white bg-opacity-30 p-[0.4rem] shadow-md backdrop-blur-xl hover:scale-[0.97] active:scale-[1.03]"
          >
            <div className="h-[5.7rem] w-[9rem] overflow-hidden rounded-lg">
              <img src={design.img} draggable={false} className="" alt="" />
            </div>
          </div>
        );
      })}
    </div>
  );
}
