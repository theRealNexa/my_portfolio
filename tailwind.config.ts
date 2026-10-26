import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "rgb(var(--bg) / <alpha-value>)",
        ink: "rgb(var(--ink) / <alpha-value>)",
        sub: "rgb(var(--sub) / <alpha-value>)",
        mute: "rgb(var(--mute) / <alpha-value>)",
        line: "rgb(var(--line) / <alpha-value>)",
        card: "rgb(var(--card) / <alpha-value>)",
        wash: "rgb(var(--wash) / <alpha-value>)",
        accent: "rgb(var(--accent) / <alpha-value>)",
        btn: "rgb(var(--btn-bg) / <alpha-value>)",
        btnfg: "rgb(var(--btn-fg) / <alpha-value>)",
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      maxWidth: { page: "1290px" },
    },
  },
  plugins: [],
};

export default config;
