/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,html}"],
  theme: {
    extend: {
      colors: {
        primary: "#2E5A2E",
        secondary: "#98CF98",
      },
    },
  },
  plugins: [],
};
