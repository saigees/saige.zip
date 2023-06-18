import { HTMLAttributes, InputHTMLAttributes } from "react"
import { cn } from "~/lib/utils"

export type InputProps = {

} & InputHTMLAttributes<HTMLInputElement>
export default function Input({ className, ...props }: InputProps) {
    return (
        <input className={`${cn("p-2 bg-white outline-none text-black border border-black border-opacity-25 rounded-lg", className)}`} {...props} />
    )
}