/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,tsx,ts}"],
  theme: {
    extend: {
      gridAutoRows: {
        gird150: "150px",
      },
    },
  },
  plugins: [],
};
