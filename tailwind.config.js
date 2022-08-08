module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  // daisyui: {
  //   themes: [
  //     {
  //       winter: {
  //         ...require("daisyui/src/colors/themes")["[data-theme=winter]"],
  //         primary: "#bedcff",
  //         secondary: "white",
  //       },
  //       dark: {
  //         ...require("daisyui/src/colors/themes")["[data-theme=light]"],
  //         primary: "white",
  //         secondary: "black",
  //       },
  //     },
  //   ],
  // },
  plugins: [require("daisyui")],
};
