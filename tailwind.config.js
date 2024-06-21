// tailwind.config.js
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      direction: {
        rtl: "rtl",
      },

      colors: {
        fill: "#F1F8E8",
        color1: "#E51390",
        "color1-light": "#FFC6F6",
        color2: "#262F68",
      },
      fontFamily: {
        tajawal: ["Tajawal", "sans-serif"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
