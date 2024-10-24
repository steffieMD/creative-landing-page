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
        hoverred: "#FF9393",
        customblue: "#191921",
      },
      fontSize: {
        "3.5xl": [
          "2rem",
          {
            lineHeight: "2.5rem",
            letterSpacing: "-0.01em",
            fontWeight: "800",
          },
        ],
      },
    },
  },
  plugins: [],
};
