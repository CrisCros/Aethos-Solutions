import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./lib/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        violetBrand: {
          50: "#f5f3ff",
          100: "#ede9fe",
          300: "#c4b5fd",
          400: "#a78bfa",
          500: "#8b5cf6",
          600: "#7c3aed",
          700: "#6d28d9"
        }
      },
      boxShadow: {
        panel: "0 12px 32px rgba(76, 29, 149, 0.16)",
        glow: "0 0 0 1px rgba(167,139,250,.25), 0 16px 36px rgba(124,58,237,.25)"
      }
    }
  },
  plugins: []
};

export default config;
