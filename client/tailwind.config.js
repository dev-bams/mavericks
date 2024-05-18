/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#000",
        chelsea: "#3300ff",
        "light-chelsea": "#7df9ff",
        grass: "#2fff2f",
        corn: "#ffff00",
        blood: "#ff4911",
      },
    },
  },
  plugins: [],
};
