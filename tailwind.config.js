/** @type {import('tailwindcss').Config} */
module.exports = {
  // content: ["./src/**/*.{js,jsx,ts,tsx}",],
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'sm': '600px',
      // => @media (min-width: 6px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '992px',

      'xl': '1200px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      
    },
    extend: {},
  },
  plugins: [],
}
