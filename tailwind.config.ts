import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      colors: {
        orange: "#EBA82C",
        orangeLight: "#FEBE32",
        blackLight: "#1D1D1B",
        red: "#FF132D",
        gray: "#F5F5F5",
        yellow: "#F3B72C",
        lightBlue: "#009FE3",
        lightGray: "#8F9090",
        darkGray: "#9DA1A2",
      },
      backgroundImage: {
        hero: "url('/assets/images/webp/hero-bg-image.webp')",
        howItWork: "url('/assets/images/webp/works-bg-image.webp')",
      },
      backgroundPosition: {
        customRight: "0px ",
      },
      boxShadow: {
        whiteShadow: "100px 0px 0px #fff inset",
        heroShadow: "320px 0px 0px #fff inset",
        redShadow: "270px 0px 0px #FF132D inset",
        navBarShadow: "0px 4px 8px rgba(0, 0, 0, 0.25)",
      },
    },
  },
  plugins: [],
} satisfies Config;
