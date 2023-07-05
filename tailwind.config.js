/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,tsx,ts}"],
  theme: {
    extend: {
      width: {
        imgWidth: "500px",
      },
      height: {
        imgHeight: "400px",
      },
      backgroundColor: {
        black4: "rgba(0, 0, 0, 0.4)",
        shadowBlue: "rgb(74, 74, 215)",
      },
      fontFamily: {
        TheJamsil5Bold: "TheJamsil5Bold",
      },
      maxHeight: {
        max70: "70vh",
      },
      gridAutoRows: {
        gird150: "150px",
      },
      gridTemplateColumns: {
        "repeat-2fr": "repeat(2, 1fr)",
      },
      animation: {
        "view-motion": "motion 0.2s forwards",
        "list-anim": "listAnim 0.2s forwards linear",
      },
      keyframes: {
        motion: {
          "0%": { right: "-400px" },
          "100%": { right: "0px" },
        },
        listAnim: {
          "0%": { opacity: 0, top: "-10px" },
          "100%": { opacity: 1, top: "0px" },
        },
      },
    },
  },
  plugins: [],
};
