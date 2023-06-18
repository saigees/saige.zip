import {
  HTMLAttributes,
  InputHTMLAttributes,
  TextareaHTMLAttributes,
} from "react";
import { cn } from "~/lib/utils";

export type InputProps = {} & TextareaHTMLAttributes<HTMLTextAreaElement>;
export default function TextArea({ className, ...props }: InputProps) {
  return (
    <textarea
      className={`${cn(
        `rounded-lg border border-black border-opacity-25 bg-white p-2 text-black outline-none`,
        className
      )}`}
      {...props}
    />
  );
}
