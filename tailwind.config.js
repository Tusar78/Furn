/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        heading: ["Exo 2", "sans-serif"],
        body: ["Alegreya Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
