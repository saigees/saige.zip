import socials from "./data";
import { Icon } from "@iconify/react";
export default function Socials() {
  return (
    <div className="flex gap-2">
      {socials.map((s) => {
        return (
          <a
            href={s.url}
            key={Math.floor(Math.random() * 99999999)}
            className={`bounce scale-[1] cursor-pointer rounded-lg  border border-black border-opacity-25 p-2 text-xl text-black hover:scale-[1.03] hover:border-opacity-40 ${s.className}`}
          >
            <Icon icon={s.icon} />
          </a>
        );
      })}
    </div>
  );
}
