import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        w: "w 0.3s linear",
      },
      keyframes: {
        w: {
          "0%": { transform: "translateX(15rem)" },
          "100%": { transform: "translateX(0)" },
        },
      },
      fontFamily: {
        iran: ["var(--iran)"],
      },
      colors: {
        mainblue: "#3b82f6",
        lightblue: "#E1F7F5",
        darkblue: "#4E5968",
        verydark: "#334155",
        backgray: "#ECEEEF",
        night: "#0E2338",
        yelloww: "#FDDE55",
        greyy: "#B4B4B8",
        maingreen: "#9BCF53",
      },
    },
  },
  plugins: [],
};
export default config;
