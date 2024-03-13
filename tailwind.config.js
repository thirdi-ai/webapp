/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        base: ["16px", "19.09px"],
        "3xl": ["32px", "38.19px"],
        md: ["15.33px", "18.29px"],
        xs: ["11px", "13.13px"],
        xxs: ["10.54px", "12.57px"],
      },
      colors: {
        black: "#000000",
        "black-400": "#141522",
        "black-600": "#080808",
        "white-400": "#f2f2f2",
        "white-500":" #EEEEF1",
        white: "#ffffff",
        "white-smoke":"#FBFBFC",
        grey: "#dddddd",
        "grey-800": "#8E92BC",
        "grey-600": "#E1E1E1",
        "grey-500": "#303036",
        "gray-light": "#666666",
        "grey-400": "#939393",
        "blue-400": "#2A60B7",
        "blue-600":" #4372D4",
        "yellow-300": "#FFE7A9FA",
        violet: "#d311af",
      },
    },
  },
  plugins: [],
};
