/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {},
    },
  },
  darkMode: "class",
  plugins: [require("daisyui")],
  // DAISY UI CONFIG
  daisyui: {
    styled: true,
    themes: [
      // {
      //   cupcake: {
      //     ...require("daisyui/src/colors/themes")["[data-theme=cupcake]"],
      //     "--btn-text-case": "none", // set default text transform for buttons
      //   },
      // },
      // {
      //   forest: {
      //     ...require("daisyui/src/colors/themes")["[data-theme=forest]"],
      //     "--btn-text-case": "none", // set default text transform for buttons
      //     primary: "#312e81",
      //     neutral: "#d7cccc",
      //     "base-content": "#d7cccc",
      //   },
      // },
    ],
    // themes: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    // darkTheme: "luxury",
  },
};
