import type { Config } from "tailwindcss";

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
        lamaSky: "#C3EBFA",
        lamaSkyLight: "#EDF9FD",
        lammaYellow: "#FAE27C",
        lammaPurple: "#CFCEFF",
        lammaPurpleLight: "#FAE27C",
        lammaYellowLight: "#FEFCE8",
      },
    },
  },

  plugins: [],
} satisfies Config;
