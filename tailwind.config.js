/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        commisioner: ['"Commissioner"', "sans-serif"],
      },
      colors: {
        customred: "#F94F4F",
      },
    },
  },
  plugins: [],
};
