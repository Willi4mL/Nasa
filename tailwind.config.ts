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
      whiteTextColor: "#eaeaea",
      whiteElementColor: "#e8eeef",
      greenColor: "#22c55e",
      darkBlueColor: "#020617",
      blueColor: "#79afcb",
    },
    extend: {
      keyframes: {
        scroll: {
          "0%": { transform: "translateY(0)", opacity: "1" },
          "50%": { transform: "translateY(23px)", opacity: "1" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideIn: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
        slideOut: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(100%)" },
        },
        slideInOpacity: {
          "0%": { transform: "translateX(200%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
      },
      animation: {
        scroller: "scroll 4s linear infinite",
        slideIn: "slideIn 0.5s forwards",
        slideOut: "slideOut 0.5s forwards",
        menuSliderText: "slideInOpacity 0.5s ease-in-out",
      },
    },
  },
  plugins: [],
};
export default config;
