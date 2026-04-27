import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#eef4ff",
          100: "#dbe7ff",
          500: "#2f6fec",
          600: "#275dd0",
          700: "#224da8"
        }
      },
      boxShadow: {
        panel: "0 10px 30px rgba(8, 28, 65, 0.08)"
      }
    }
  },
  plugins: []
};

export default config;
