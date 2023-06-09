const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        slate: {
          500: "#343C51",
          600: "#3F4465",
          700: "#404757",
          800: "#565F76",
        },
        grey: {
          500: "#908E95",
          800: "#CCCCCC",
        },
        blue: {
          500: "#5585FF",
        },
        red: {
          500: "#F5544A",
        },
        green: {
          500: "#95F54A",
        },
      },
      fontFamily: {
        inter: ["var(--font-inter)", ...fontFamily.sans],
        icomoon: ["var(--font-icomoon)"],
      },
    },
  },
  plugins: [],
};
