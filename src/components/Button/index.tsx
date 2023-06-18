import { AnchorHTMLAttributes } from "react"
import { cn } from "~/lib/utils"

export type ButtonProps = {
} & AnchorHTMLAttributes<HTMLAnchorElement>
export default function Button({ children, className, ...props }: ButtonProps) {
  return (
    <a
      className={`${cn(
        `bounce scale-[1] cursor-pointer rounded-lg border border-black border-opacity-25 bg-white px-3 py-2 text-black active:scale-[0.96]`,
        className
      )}`}
      {...props}
    >
      {children}
    </a>
  );
}