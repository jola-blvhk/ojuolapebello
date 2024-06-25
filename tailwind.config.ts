import { Megrim } from "next/font/google";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        poppins: ["var(--font-poppins)"],
      },
      colors: {
        primary: {
          "black-100": "#000000",
          "black-90": "#454545",
          "black-80": "#6C6A6C",
          "grey-100": "#8C8A8A",
          "white-100": "#FFFFFF",
          "white-90": "#F8F7F7",
        },
        secondary: {
          "orange-100": "#E25B4B",
          "orange-90": "#DA8540",
          "orange-80": "#F3AB7D",
        },
      },
      boxShadow: {
        shadowOne: "3px 5px 20px rgba(0, 0, 0, 0.04)",
        shadowTwo: "0px 4px 30px rgba(0, 0, 0, 0.05)",
      },
      backgroundColor: {
        "white-90": "#FAFAFA",
        "black-80": "#191919",
        "brown-100": "#D87D4A",
        "peach-90": "#FBAF85",
      },
    },
  },
  plugins: [],
};
export default config;
