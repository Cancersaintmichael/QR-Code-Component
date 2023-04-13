/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#ffffff",
        "light-gray": "#848d97",
        "grayish-blue": "#d1e1ff",
        "dark-blue": "#1f3251",
      },
    },
  },
  plugins: [],
};
