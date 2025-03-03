/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  plugins: [require("daisyui"), require("@tailwindcss/forms")],
  theme: {
    extend: {},
  },
};
