import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          900: "#0B132B",
          950: "#060B18",
        },
        brand: {
          navy: "#0B132B",
          dark: "#080E20",
          ivory: "#FBFBF9",
          offwhite: "#F5F5F0",
          gold: "#C5A059",
          goldHover: "#B38F48",
          burgundy: "#6B1724",
          slate: "#334155",
          muted: "#64748B",
          border: "#E2E8F0",
        },
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Playfair Display", "Georgia", "serif"],
        sans: ["var(--font-inter)", "Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
