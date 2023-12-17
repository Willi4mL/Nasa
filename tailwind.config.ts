import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      mobile: "320px",
      tablet: "640px",
      laptop: "1024px",
    },
    colors: {
      whiteColor: "#e5e5e5",
      greenColor: "#22c55e",
      darkBlueColor: "#020617",
    },
    extend: {
      keyframes: {
        scroll: {
          "0%": { transform: "translateY(0)", opacity: "1" },
          "50%": { transform: "translateY(23px)", opacity: "1" },
          "100%": { transform: "translateY(0)", opacity: "0.3" },
        },
      },
      animation: {
        scroller: "scroll 4s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
