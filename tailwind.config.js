/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        SoftBlue: "hsl(215, 51%, 70%)",
        Cyan: "hsl(178, 100%, 50%)",
        Cyan2: "hsl(178, 100%, 50%, 60%)",
        VeryDarkBlueM: "hsl(217, 54%, 11%)",
        VeryDarkBlueC: "hsl(216, 50%, 16%)",
        VeryDarkBlueL: "hsl(215, 32%, 27%)",
        White: "hsl(0, 0%, 100%)"
      },
      screens: {
        "tablet" : "576px"
      }
    },
  },
  plugins: [],
}

