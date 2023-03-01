/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./views/**/*.{js,jsx}",
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        brooklyn: ["Brooklyn"],
        brooklynNormal: ["Brooklyn Normal"],
        cosmetic: ["Cosmetic"],
        belfast: ["Belfast"],
      },
      colors: {
        mirage: "#121632",
        brown: {
          tobacco: "#6B6343",
          dull: "#8b6e4b",
        },
        clay: "#8e825c",
        swan: "#bfb8ae",
        platinum: "#E9E4E0",
      },
    },
  },
  plugins: [],
};
