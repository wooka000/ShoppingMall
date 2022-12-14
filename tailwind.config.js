/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: "#646EFF",
      },
      backgroundImage: {
        banner: `url('../public/images/banner.PNG')`,
      },
    },
  },
  plugins: [],
};
