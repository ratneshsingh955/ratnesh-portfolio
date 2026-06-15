import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./src/**/*.{ts,tsx,mdx}"],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: { "2xl": "1200px" },
    },
    extend: {
      colors: {
        bg: "hsl(var(--bg))",
        surface: "hsl(var(--surface))",
        border: "hsl(var(--border))",
        fg: "hsl(var(--fg))",
        muted: "hsl(var(--muted))",
        faint: "hsl(var(--faint))",
        accent: "hsl(var(--accent))",
        accent2: "hsl(var(--accent-2))",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["var(--font-space)", "var(--font-inter)", "sans-serif"],
        mono: ["ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
      },
      keyframes: {
        aurora: {
          "0%, 100%": { transform: "translate(0,0) scale(1)" },
          "33%": { transform: "translate(4%, -6%) scale(1.1)" },
          "66%": { transform: "translate(-4%, 4%) scale(0.95)" },
        },
        "pulse-dot": {
          "0%": { boxShadow: "0 0 0 0 hsl(var(--accent) / 0.5)" },
          "70%": { boxShadow: "0 0 0 8px hsl(var(--accent) / 0)" },
          "100%": { boxShadow: "0 0 0 0 hsl(var(--accent) / 0)" },
        },
      },
      animation: {
        aurora: "aurora 18s ease-in-out infinite",
        "pulse-dot": "pulse-dot 2.2s infinite",
      },
    },
  },
  plugins: [],
};

export default config;
