import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        orange: "#EBA82C",
        orangeLight: "#FEBE32",
        blackLight: "#1D1D1B",
        red: "#FF132D",
        gray: "#F5F5F5",
        yellow: "#F3B72C",
        lightBlue: "#009FE3",
        lightGray: "#8F9090",
      },
      backgroundImage: {
        hero: "url('/assets/images/webp/hero-bg-image.webp')",
        howItWork: "url('/assets/images/webp/works-bg-image.webp')",
      },
      backgroundPosition: {
        customRight: "0px ",
      },
    },
  },
  plugins: [],
} satisfies Config;
