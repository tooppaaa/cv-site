const { fontFamily, colors } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{ts,tsx,md,mdx}",
    "./components/**/*.{ts,tsx,md,mdx}",
    "./ui/**/*.{ts,tsx,md,mdx}",
    "./lib/**/*.{ts,tsx,md,mdx}",
    "./mdx-components.tsx",
  ],
  darkMode: ["class"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1440px",
        "3xl": "1680px",
      },
    },
    extend: {
      colors: {
        background: "hsl(var(--color-background))",
        foreground: "var(--color-foreground)",
        "foreground-secondary": "var(--color-foreground-secondary)",
        "foreground-light": "var(--color-foreground-light)",
        line: "var(--color-line)",
        primary: "hsl(var(--color-primary))",
      },
      fontFamily: {
        DEFAULT: ["var(--font-sans)", ...fontFamily.sans],
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require("@tailwindcss/typography"),
    require("tailwindcss-radix")(),
  ],
};
