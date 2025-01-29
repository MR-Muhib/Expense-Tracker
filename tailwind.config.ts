import type { Config } from "tailwindcss";
import scrollbarHide from "tailwind-scrollbar-hide";
// import daisyui from "daisyui";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        green: {
          primary: "#059669 ",
          dark: "#047857  ",
        },
        gray: {
          light: "#f9fafb ",
        },
      },
    },
  },
  plugins: [scrollbarHide],
} satisfies Config;
