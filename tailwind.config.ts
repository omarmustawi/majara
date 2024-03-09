import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {},
      colors: {
        light: "#f8f8f8",
        // dark: "#444746",
        dark: "#362929",
        activeLink: "#c2e7ff",
        purple: "#532E8F",
        "blue-light": "#36C0D0",
        "red-light": "#E2276D",
        igency: "#37C1D1",
        media: "#1C1C1C",
        event: "#6E6F72",
        temkeen: "#E3296E",
        acadimy: "#542E90",

      },
    },
  },
  plugins: [],
};
export default config;
