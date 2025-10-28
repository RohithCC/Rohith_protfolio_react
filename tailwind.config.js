/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx,html}"
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f5fbff",
          100: "#e6f5ff",
          500: "#0ea5a4"
        }
      }
    }
  },
  // If you generate classes dynamically, safelist them here:
  // safelist: [
  //   'bg-red-500', 'bg-green-500', 'bg-blue-500', // example
  // ],
  plugins: []
};
