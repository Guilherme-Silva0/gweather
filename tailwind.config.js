/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        fist: "#1f2937",
        second: "#111827",
        third: "#0099dd",
      },
      fontFamily: {
        outfit: "'Outfit', sans-serif",
      },
    },
  },
  plugins: [],
};
