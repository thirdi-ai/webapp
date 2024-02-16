/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#000000",
        white: "#ffffff",
        grey: "#dddddd",
        daisy:"#fafafa",
        "gray-light":"#666666",
        violet: "#d311af"
      },
    },
  },
  plugins: [],
};
