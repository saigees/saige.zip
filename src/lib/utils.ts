import { clsx, type ClassValue } from "clsx"
import { toast } from "sonner"
import { twMerge } from "tailwind-merge"
import { env } from "~/env.mjs"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const resolveColorForDiscord = (color: string) => {
    if (/^#?[\da-f]{6}$/i.test(color)) return parseInt(color.replace('#', ''), 16);
    return 0xeb459e
}