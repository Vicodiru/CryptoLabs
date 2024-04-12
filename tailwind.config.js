/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: { nunito: "Nunito" },
    },
    colors: {
      gray: { 100: "#808080", 200: "#323232", 300: "#212121" },
      white: "#fff",
      cyan: "#14ffec",
      red: "#d6436e",
      green: "#25da72",
    },
    fontSize: {
      sm: ".875rem",
      md: "1.125rem",
      lg: "1.5rem",
      xl: "2rem",
      base: "1rem",
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
