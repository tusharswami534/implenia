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
      },
      backgroundImage: {
        hero: "url('/assets/images/png/hero-bg-image.png')",
        howItWork: "url('/assets/images/png/works-bg-image.png')",
      },
    },
  },
  plugins: [],
} satisfies Config;
