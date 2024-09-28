/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      inter: ["Inter", "sans-serif"],
    },
    colors: {
      dark1: "#151515",
      dark2: "#444444",
      white: "#FFFFFF",
      green: "#228B22",
      orange: "#d35400",
    },
  },
  plugins: [],
};
