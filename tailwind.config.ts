import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-bebas)", "Impact", "Arial Narrow", "sans-serif"],
        sans: ["var(--font-grotesk)", "system-ui", "sans-serif"],
        mono: ["'Courier New'", "ui-monospace", "monospace"],
      },
      colors: {
        noise: "#0a0a0a",
      },
    },
  },
  plugins: [],
};
export default config;
