"use client";
import { usePathname } from "next/navigation";
import Dropdown from "./Dropdown";
const paths = [] as {
  name: string;
  url: string;
}[]

export default function Navbar() {
  const pathname = usePathname();
  return (
    <div className="sticky top-10 flex items-center justify-between">
      <div>
        {" "}
        <h1 className="handwriting text-[25px] font-bold">Saige</h1>
      </div>
      <div className="flex items-center gap-5 rounded-full bg-white bg-opacity-20 px-5 py-3 backdrop-blur-[18px]">
        {paths.map((path) => {
          return (
            <a
              key={Math.floor(Math.random() * 99999999)}
              href={path.url}
              className={`bounce text-[14px]  text-black hover:text-purple-600 ${
                pathname === path.url ? "text-purple-600" : ""
              }`}
            >
              {" "}
              {path.name}{" "}
            </a>
          );
        })}
        <Dropdown
          selector="Work"
          tabs={[
            { name: "Design", href: "/design" },
            { name: "Development", href: "/development" },
          ]}
        />
      </div>
    </div>
  );
}
