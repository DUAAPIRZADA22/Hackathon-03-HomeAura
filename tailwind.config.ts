import { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "clash-display": ["'Clash Display'", "sans-serif"],
        satoshi: ["'Satoshi'", "sans-serif"],
      },
      colors: {
        darkPrimary: "#2A2548",
        Primary: "#4E4D93",
      },
    },
  },
  plugins: [],
};

export default config;


