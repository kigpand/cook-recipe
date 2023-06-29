/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,tsx,ts}"],
  theme: {
    extend: {
      backgroundColor: {
        black4: "rgba(0, 0, 0, 0.4)",
      },
      gridAutoRows: {
        gird150: "150px",
      },
    },
  },
  plugins: [],
};
