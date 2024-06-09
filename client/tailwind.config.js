/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: ["light", "dark", "cupcake", "luxury"],
  },
  darkMode: "class",
  theme: {
    container: {
      center: true,
      screens: {
        md: "768px",
        mdd: "976px",
        lg: "1200px",
        xl: "1300px",
      },
    },
    screens: {
      sm: "480px",
      md: "768px",
      lg: "1200px",
      xl: "1300px",
    },
    extend: {},
  },
  plugins: [require("daisyui")],
};
