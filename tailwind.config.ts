import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      // colors: {
      //   primary: {
      //     DEFAULT: '#3498db',
      //     dark: '#2980b9'
      //   },
      //   secondary: {
      //     DEFAULT: '#2ecc71',
      //     dark: '#27ae60'
      //   },
      //   accent: {
      //     DEFAULT: '#e74c3c',
      //     dark: '#c0392b'
      //   },
      //   background: {
      //     DEFAULT: '#f4f4f4',
      //     dark: '#2c3e50'
      //   },
      //   text: {
      //     DEFAULT: '#333333',
      //     dark: '#ecf0f1'
      //   },
      //   cta: {
      //     DEFAULT: '#e67e22',
      //     dark: '#d35400'
      //   },
      //   warning: {
      //     DEFAULT: '#f39c12',
      //     dark: '#f1c40f'
      //   }
      // },
      colors: {
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        accent: 'var(--accent)',
        background: 'var(--background)',
        text: 'var(--text)',
        cta: 'var(--cta)',
        warning: 'var(--warning)'
      },
      width: {
        '49p': '49%', // You can name this key anything you like
      },
    },
  },
  plugins: [],
};
export default config;
