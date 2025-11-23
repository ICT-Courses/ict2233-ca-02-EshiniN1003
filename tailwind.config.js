/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",   // <-- REQUIRED for dark mode to work!

  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f5faff",
          100: "#e6f0ff",
          500: "#2563eb",
        },
      },
    },
  },

  plugins: [],
};
