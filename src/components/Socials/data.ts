import { DISCORD, GITHUB, SPOTIFY, TWITTER } from "~/lib/vars";

export default [
    { icon: "bxl:github", name: "Github", url: GITHUB, className: "hover:text-purple-600"},
    { icon: "bxl:discord-alt", name: "Discord", url: DISCORD, className: "hover:text-burple"},
    { icon: "bxl:twitter", name: "Twitter", url: TWITTER, className: "hover:text-sky-400"},
    { icon: "bxl:spotify", name: "Spotify", url: SPOTIFY, className: "hover:text-green-500"}
] as {
    name: string;
    icon: string;
    url: string;
    className: string;
}[]