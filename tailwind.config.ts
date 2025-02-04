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
        primary: "#22EAAA",
        secondary: "#FF8181",
        background: "#151515",
        white: "#fff",
        lightGrey: "#d6d6d6",
        darkGrey: "#242424",
      },
    },
  },
  plugins: [],
} satisfies Config;
