import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "burple": "#5865F2"
      },
      screens: {
        "mobile": {
          max: "1141px"
        },
        "smallest": {
          max: "949px"
        },
        "small": {
          max: "707px"
        }
      }
    },
  },
  plugins: [],
} satisfies Config;
