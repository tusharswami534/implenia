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
        blackLight: "#1D1D1B",
      },
      backgroundImage: {
        hero: "url('/assets/images/png/hero-bg-image.png')",
      },
    },
  },
  plugins: [],
} satisfies Config;
