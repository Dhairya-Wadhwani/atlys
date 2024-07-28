/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: "#4b97ff",
        darkGray: "#9ca3af",
        mainGray: "#28292d",
        modalBg: "rgba(0, 0, 0, 0.4)",
      }
    },
  },
  plugins: [],
}

