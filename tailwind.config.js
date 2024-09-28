/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      inter: ["Inter", "sans-serif"],
      cinzel: ["Cinzel", "serif"],
    },
    colors: {
      dark1: "#151515",
      dark2: "#444444",
      dark3: "#737373",
      dark4: "#A1A1A1",
      dark5: "#D0D0D0",
      dark6: "#E8E8E8",
      dark7: "#F3F3F3",
      white: "#FFFFFF",
    },
  },
  plugins: [],
};
