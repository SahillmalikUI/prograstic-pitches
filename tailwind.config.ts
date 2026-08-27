import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "#FFFFFF",
        "bg-subtle": "#F8FAFC",
        "surface-card": "#FFFFFF",
        "surface-border": "#E2E8F0",
        "surface-border-dark": "#CBD5E1",
        brand: {
          indigo: "#4F46E5",
          blue: "#2563EB",
          teal: "#0D9488",
          emerald: "#059669",
          rose: "#E11D48",
          amber: "#D97706",
          slate: "#0F172A",
        }
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
        display: ["var(--font-outfit)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
