import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          md: "2rem",
          lg: "4rem",
        },
      },
      colors: {
        // background: "var(--background)",
        // foreground: "var(--foreground)",
        // background: "rgb(var(--background) / <alpha>)", // Use RGB syntax with opacity support
        foreground: "rgb(var(--foreground) / <alpha>)", // Same here
        primary: '#A1CD59',
        background: '#172343'
      },
      animation: {
        spin: 'spin 2s linear infinite',
      },
      fontFamily: {
        neohellenic: '---font-neohellenic'
      }
    },
  },
  plugins: [],
} satisfies Config;
