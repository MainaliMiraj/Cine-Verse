import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#8697C4",
        secondary: "#ADBBDA",
        moderatePink: "#C33764",
        veryDarkBlue: "#1D2671",
      },
    },
  },
  plugins: [],
};
export default config;
