/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "hsl(0, 0%, 100%)",
        "light-gray": "hsl(212, 45%, 89%)",
        "grayish-blue": "#d1e1ff",
        "dark-blue": "hsl(218, 44%, 22%)",
      },
    },
  },
  plugins: [],
};
