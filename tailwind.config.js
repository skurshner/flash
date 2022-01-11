const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./src/Layout/*.js",
    "./src/Components/**/*.js",
    "./src/Components/Deck/**/*.js",
    "./src/App.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
