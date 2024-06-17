/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      sm: { max: "767px" },
      // => @media (max-width: 767px) { ... }
      md: { min: "768px" },
      // => @media (max-width: 767px) { ... }
      lg: { min: "1023px" },
      // => @media (max-width: 1023px) { ... }
    },
  },
  plugins: [],
};
