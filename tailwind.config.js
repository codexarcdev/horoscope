/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      desktop: { max: "1440px" },
      basic: { max: "1280px" },
      laptop: { max: "1024px" },
      tablet: { max: "768px" },
      medium: { max: "640px" },
      mobile: { max: "425px" },
      mini: { max: "320px" },
    },
    colors: {
      midgray: "#777777",
      midgreen: "#3FCDC3",
      midred: "#E70A0A",
      input: {
        light: "#F7F7F7",
        dark: "#161C22",
      },
      screen: {
        light: "#FFFFFF",
        dark: "#212931",
      },
    },
    extend: {
      fontFamily: {
        moul: "Moul",
        sans: ["Manrope", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
