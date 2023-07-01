/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,tsx,ts}"],
  theme: {
    extend: {
      backgroundColor: {
        black4: "rgba(0, 0, 0, 0.4)",
      },
      fontFamily: {
        TheJamsil5Bold: "TheJamsil5Bold",
      },
      gridAutoRows: {
        gird150: "150px",
      },
      gridTemplateColumns: {
        "repeat-2fr": "repeat(2, 1fr)",
      },
      animation: {
        "view-motion": "motion 0.2s forwards",
      },
      keyframes: {
        motion: {
          "0%": { right: "-400px" },
          "100%": { right: "0px" },
        },
      },
    },
  },
  plugins: [],
};
