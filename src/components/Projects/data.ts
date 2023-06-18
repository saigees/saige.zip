export const wrap = (s: string) => {
    const regex = /.{1,33}/g;
    return s.match(regex)?.join("\n")
}

export default [
    {
        name: "Dume",
        url: "https://github.com/saigees/dume",
        img: "/Dume.png",
        type: "light",
        description: "A dummy json api, with categories such as names, phone numbers etc."
    },
    {
        name: "Elix",
        url: "https://github.com/rayna-tech/elix",
        img: "https://cdn.rayna.tech/elixdb-banner.png",
        type: "light",
        description: "A simple yet effective go lang based key value store database."
    },
    {
        name: "Dusk",
        url: "https://github.com/saigees/dusk",
        img: "https://cdn.rayna.tech/dusk-banner.png",
        type: "light",
        description: "A small 90MB~ url formatting library for node applications"
    }
].map((z) => ({
    ...z,
    description: wrap(z.description)
})) as {
    name: string;
    url: string;
    stat?: string;
    img: string;
    description: string;
    type: "light" | "dark"
}[]
